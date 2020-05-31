using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using VoetbalAPI.Model;

namespace VoetbalAPI
{
    public class CompetitieContext: DbContext
    {
        public CompetitieContext(DbContextOptions<CompetitieContext> options): base(options)
        {

        }
        public DbSet<Ploeg> Ploegen { get; set; }
        public DbSet<Speler> Spelers { get; set; }
        public DbSet<Beker> Bekers { get; set; }
        public DbSet<BekerPloeg> BekersPloegen { get; set; }

   
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<BekerPloeg>()
                .HasKey(x => new { x.BekerId, x.PloegId });
        }
        
    }
}
