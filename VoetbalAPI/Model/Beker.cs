using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace VoetbalAPI.Model
{
    public class Beker
    {
        public int Id { get; set; }
        [Required]
        public int KampioenVanBelgië { get; set; }
        [Required]
        public int BekerVanBelgië { get; set; }
        [Required]
        public int SupercupVanBelgië { get; set; }
        [Required]      
        public int ChampionsLeagueBeker { get; set; }
        [Required]
        public int EuropaLeagueBeker { get; set; }
        public ICollection<BekerPloeg> BekersPloeg { get; set; }
    }
}
