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
    }
}