using System;

namespace API;


public class RegisterDto
{
  public required string Username { get; set; }
  public required string Password { get; set; }
}
