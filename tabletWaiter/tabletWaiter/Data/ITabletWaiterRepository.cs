﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using tabletWaiter.Models;

namespace tabletWaiter.Data
{
    public interface ITabletWaiterRepository
    {
        //ITEMS
        Item GetItem(int itemId);

        IEnumerable<Item> GetAllItems();

        bool addItem(Item itemToAdd);

        bool Save();

        bool deleteItem(int itemId);

        bool editItem(Item itemToAdd);
        IEnumerable<Item> getShowItems();

        //CATEGORIES
        bool CreateCategory(Category category);

        List<Category> GetAllCategories();

        bool deleteCategory(int categoryId);

        bool changeHiddenStatus(int itemId);


        //ORDERS
        IEnumerable<Order> GetOrder();

        bool addOrder(Order order);

        //ORDERITEM
        bool addOrderItem(Item orderItemToAdd);
    }
}
