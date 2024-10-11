namespace DemoProject.API.DTOs
{
    public class UserDTO
    {
        public int UserID { get; set; }
        public string UserType { get; set; }
        public string UserEmail { get; set; }
        public DateTime DateJoined { get; set; }
        public DateTime DateLastUpdated { get; set; }
    }
}
