using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Entity.Migrations;

namespace tabletWaiter.Data
{
    class TableWaiterMigrationConfiguration : DbMigrationsConfiguration<TabletWaiterContext>
    {
        public TableWaiterMigrationConfiguration()
        {
            this.AutomaticMigrationDataLossAllowed = true;
            this.AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(TabletWaiterContext context)
        {
            base.Seed(context);
        }
    }
}
