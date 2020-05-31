using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace VoetbalAPI.Model
{
    public class BekerPloeg
    {
        public int BekerId { get; set; }
        [JsonIgnore]
        public Beker Beker { get; set; }
        public int PloegId { get; set; }
        [JsonIgnore]
        public Ploeg Ploeg { get; set; }
    }
}
