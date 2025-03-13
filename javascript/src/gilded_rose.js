class GildedRose {
  processEndOfDay(items) {
    for (let i = 0; i < items.length; i++) {
      this.processItemEndOfDay(items[i]);
    }
  }

  agedCheddar(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
    item.daysRemaining = item.daysRemaining - 1;
    if (item.daysRemaining < 0 && item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }

  concertTickets(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
      if (item.name == 'Concert Tickets') {
        if (item.daysRemaining < 11) {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
        if (item.daysRemaining < 6) {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
    }
    if (item.name != 'Hammer') {
      item.daysRemaining = item.daysRemaining - 1;
    }
    if (item.daysRemaining < 0) {
      item.quality = item.quality - item.quality;
    }
  }

  updateRegularItem(item) {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }
    if (item.name != 'Hammer') {
      item.daysRemaining = item.daysRemaining - 1;
    }
    if (item.daysRemaining < 0) {
      if (item.name != 'Aged Cheddar') {
        if (item.name != 'Concert Tickets') {
          if (item.quality > 0) {
            if (item.name != 'Hammer') {
              item.quality = item.quality - 1;
            }
          }
        }
      }
    }
  }

  processItemEndOfDay(item) {
    if (item.name === 'Aged Cheddar') {
      return this.agedCheddar(item);
    }
    if (item.name === 'Concert Tickets') {
      return this.concertTickets(item);
    }
    if (item.name === 'Hammer') {
      return
    }
    return this.updateRegularItem(item)
  }
}
module.exports = {
  GildedRose,
};
