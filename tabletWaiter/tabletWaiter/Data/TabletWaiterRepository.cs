using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using tabletWaiter.Models;

namespace tabletWaiter.Data
{
    public class TabletWaiterRepository : ITabletWaiterRepository
    {
        private TabletWaiterContext _ctx { get; set; }

        public TabletWaiterRepository(TabletWaiterContext ctx)
        {
            _ctx = ctx;
        }

        public bool Save()
        {
            return _ctx.SaveChanges() > 0;
        }

        //ITEMS//
        public Models.Item GetItem(int itemId)
        {
            try
            {
                return _ctx.Items.Where(i => i.Id == itemId).First();
            }
            catch (Exception ex)
            {
                Trace.TraceError(ex.Message);
                return null;
            }
        }

        public IEnumerable<Models.Item> GetAllItems()
        {
            try
            {
                return _ctx.Items.ToList();
            }
            catch (Exception ex)
            {
                Trace.TraceError(ex.Message);
                return null;
            }
        }

        public bool addItem(Models.Item itemToAdd)
        {
            try
            {
                _ctx.Items.Add(itemToAdd);
                return true;
            }
            catch (Exception ex)
            {
                Trace.TraceError(ex.Message);
                return false;
            }
        }

        public bool deleteItem(int itemId)
        {
            try
            {
                var item = _ctx.Items.Where(i => i.Id == itemId).First();
                _ctx.Items.Remove(item);
                return true;
            }
            catch (Exception ex)
            {
                Trace.TraceError(ex.Message);
                return false;
            }
        }

        public bool editItem(Models.Item itemToEdit)
        {
            try
            {
                var item = _ctx.Items.Where(i => i.Id == itemToEdit.Id).First();
                item.Name = itemToEdit.Name;
                item.Description = itemToEdit.Description;
                item.Categories = itemToEdit.Categories;
                item.Price = itemToEdit.Price;
                item.Image = itemToEdit.Image;
                return true;
            }
            catch (Exception ex)
            {
                Trace.TraceError(ex.Message);
                return false;
            }
        }

        public IEnumerable<Models.Item> getShowItems()
        {
            try
            {
                return _ctx.Items.Where(h => h.Hidden == false).ToList();
            }
            catch (Exception ex)
            {
                Trace.TraceError(ex.Message);
                return null;
            }
        }

        //CATEGORIES
        public bool CreateCategory(Models.Category category)
        {
            try
            {
                _ctx.Categories.Add(category);
                return true;
            }
            catch (Exception ex)
            {
                Trace.TraceError(ex.Message);
                return false;
            }
        }

        public List<Models.Category> GetAllCategories()
        {
            try
            {
                return _ctx.Categories.ToList();
            }
            catch (Exception ex)
            {
                Trace.TraceError(ex.Message);
                return null;
            }
        }


        public bool deleteCategory(int categoryId)
        {
            try
            {
                var category = _ctx.Categories.Where(c => c.Id == categoryId).First();
                _ctx.Categories.Remove(category);
                return true;
            }
            catch (Exception ex)
            {
                Trace.TraceError(ex.Message);
                return false;
            }
        }


        public bool changeHiddenStatus(int itemId)
        {
            try
            {
                var item = _ctx.Items.Where(c => c.Id == itemId).First();

                if (item == null)
                {
                    return false;
                }

                item.Hidden = !item.Hidden;
                return true;
            }
            catch (Exception ex)
            {
                Trace.TraceError(ex.Message);
                return false;
            }
        }


        //ORDERS
        public IEnumerable<Order> GetOrder()
        {
            try
            {
                return _ctx.Orders.ToList();
            }
            catch (Exception ex)
            {
                Trace.TraceError(ex.Message);
                return null;
            }
        }

        public bool addOrder(Order order)
        {
            try
            {
                _ctx.Orders.Add(order);
                return true;
            }
            catch (Exception ex)
            {
                Trace.TraceError(ex.Message);
                return false;
            }
        }

        //ORDER ITEM
        public bool addOrderItem(Models.Item orderItemToAdd)
        {
            try
            {
                //_ctx.OrderItems.Add(orderItemToAdd);
                return true;
            }
            catch (Exception ex)
            {
                Trace.TraceError(ex.Message);
                return false;
            }
        }


        //ALERTS
        public bool AddSimpleAlert(string tableNumber)
        {
            try
            {
                Alert alert = new Alert();
                alert.TableNumber = tableNumber;

                _ctx.Alerts.Add(alert);
                return true;
            }
            catch (Exception ex)
            {
                Trace.TraceError(ex.Message);
                return false;
            }
        }


        public List<Alert> AllSimpleAlerts()
        {
            try
            {
                return _ctx.Alerts.ToList();
            }
            catch (Exception ex)
            {
                Trace.TraceError(ex.Message);
                return null;
            }
        }
    }
}
