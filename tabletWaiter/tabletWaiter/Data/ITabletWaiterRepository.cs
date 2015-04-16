using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using tabletWaiter.Models;

namespace tabletWaiter.Data
{
    public interface ITabletWaiterRepository
    {
        Item GetItem(int itemId);

        IEnumerable<Item> GetAllItems();

        bool addItem(Item itemToAdd);

        bool Save();

        bool deleteItem(int itemId);

        bool editItem(Item itemToAdd);
    }
}
