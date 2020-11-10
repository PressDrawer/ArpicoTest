using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ArpicoTest.Models
{
    public class ArpiContext : DbContext
    {
        public ArpiContext(DbContextOptions<ArpiContext> options) : base(options)
        {

        }

    public DbSet<Customer> Customers { get; set; }

}
}
