class ACards {
  constructor(assets) {
    this.assets = assets;
    this.cards = {};
    this.cardObjects = {};
    this.cardWidth = assets.SZ.cardWidth;
    this.cardHeight = assets.SZ.cardHeight;
    this.gap = assets.SZ.gap;
    this.startPos = {x: gap + w / 2, y: gap + h / 2};
  }
  createCard(id, o) {
    parentName = this.findParentForCard(o);
    if (parentName == null) return null; //if card is not visible it is not created

    let pos = this.findPositionForCard(parentName);

    let ms = new MS(id, id, parentName); // cards have id also as elem id! so make sure it is unique!
    this.setCardContent(ms, o);

    //pos={x:100,y:110};

    ms.setPos(pos.x, pos.y).draw();
    this.cards[id] = ms;
    this.cardObjects[id] = jsCopy(o);
    //console.log('createCard',ms,pos)
    return ms;
  }
  changeParentTo(ms, newParentName) {
    if (!newParentName) {
      ms.removeFromUIAndParent();
    } else {
      let newParent = document.getElementById(newParentName);
      if (newParent != ms.parent) {
        ms.removeFromUI();
        ms.parent = newParent;
        let pos = this.findPositionForCard(newParentName);
        ms.setPos(pos.x, pos.y).draw();
      }
    }
  }
  findParentForCard(o) {
    let vis = getVisibleSet(o);
    if (!"owner" in o) return null;
    let parentName = null;
    if (vis.length == 0) {
      return null;
    } else if (vis.length < 3) {
      parentName = "handG_" + o.owner; //card belongs in a hand
    } else {
      parentName = "openCardG"; //card is open to all
    }
    return parentName;
  }
  findPositionForCard(parentName) {
    let parent = document.getElementById(parentName);
    //console.log("parent:", parentName, parent);

    let nCards = parent.childNodes.length; // NO - 1; //because of text!
    let lastChild = nCards <= 1 ? null : parent.childNodes[nCards - 1];

    if (!lastChild) return {x: this.startPos.x, y: this.startPos.y};
    let posLastChild = cards[lastChild.id].getPos();
    let x = posLastChild.x + this.gap + this.cardWidth;
    let y = posLastChild.y;
    let div = parent.parentNode.parentNode;
    let wTotal = div.offsetWidth;
    let hTotal = div.offsetHeight;
    if (x + this.cardWidth + 2 > wTotal) {
      x = this.startPos.x;
      y += this.cardHeight + this.gap;
      div.style.height = hTotal + this.cardHeight + this.gap;
    }
    return {x: x, y: y};
  }
  isCard(o) {
    return endsWith(o.obj_type, "card");
  }
  relayoutCards(parentName) {
    let parent = document.getElementById(parentName);
    let hand = [];
    for (const c in arrChildNodes(parent)) {
      if (c.id && c.id in this.cards) {
        hand.push(this.cards[c.id]);
      }
    }

    for (const c of hand) {
      c.removeFromUI();
    }

    for (const c of hand) {
      let pos = this.findPositionForCard(parentName);
      c.setPos(pos).draw();
    }
  }
  update(data, G) {
    for (const id in G) {
      let o = G[id];
      if (!this.isCard(o)) continue;
      if (!id in this.cards) {
        let ms = this.createCard(id, o);
        if (ms) {
          console.log("CREATED card", id);
          console.log(" props changed:", Object.keys(o).toString());
        }
      } else {
        let ms = this.cards[id];
        let o_new = o;
        let o_old = this.cardObjects[id];

        //check which props have changed!
        //update accordingly!
        let ch = propDiff(o_old, o_new);
        if (ch.hasChanged) {
          console.log("update:", id);
          if (!empty(ch.summary)) console.log(" props changed:", summary.toString());
          // if (!empty(ch.onlyOld)) console.log(" old:", onlyOld.toString());
          // if (!empty(ch.onlyNew)) console.log(" new:", onlyNew.toString());
          // if (!empty(ch.propChange)) console.log("  changes:", propChange);
        }

        //if owner or visibility changed
        let newParentName = this.findParentForCard(o);
        if (newParentName != ms.parent.id) {
          console.log("parent changed to", newParentName ? newParentName : "null");
          this.changeParentTo(ms, newParentName);
        }
      }
    }
  }
}
