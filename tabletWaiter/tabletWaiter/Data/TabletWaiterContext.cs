using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using tabletWaiter.Models;

namespace tabletWaiter.Data
{
    public class TabletWaiterContext : DbContext
    {
        public TabletWaiterContext()
            : base("DefaultConnection")
        {
            this.Configuration.LazyLoadingEnabled = false;
            this.Configuration.ProxyCreationEnabled = false;

            Database.SetInitializer(
                new MigrateDatabaseToLatestVersion<TabletWaiterContext, TableWaiterMigrationConfiguration>()
                );
        }

        public DbSet<Item> Items { get; set; }
    }
}