using System;
using System.Collections.Generic;

#nullable disable

namespace NonProfit.Models
{
    public partial class Availability
    {
        public int PersonalDetailsId { get; set; }
        public string BeforeSchool { get; set; }
        public string Amblock { get; set; }
        public string Lunch { get; set; }
        public string AfterSchool { get; set; }
        public string Pmblock { get; set; }
    }
}
