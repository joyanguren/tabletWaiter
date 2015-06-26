using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

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
    }
}