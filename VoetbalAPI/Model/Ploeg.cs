using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace VoetbalAPI.Model
{
    public class Ploeg
    {
        public int Id { get; set; }
        [Required]
        public string PloegNaam { get; set; }
        [Required]
        public string Gemeente { get; set; }
        [Url]
        [Required]
        public string Website { get; set; }
        [Required]
        public int Stamnummer { get; set; }
        public int Gewonnen { get; set; }
        public int Verloren { get; set; }
        public int Gelijkspel { get; set; }
        public int Punten { get; set; }
        [JsonIgnore]
        public ICollection<Speler> Spelers { get; set; }
        public ICollection<BekerPloeg> BekersPloeg { get; set; }
    }
}
