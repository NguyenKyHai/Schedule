using System.Net;
using System.Text.Json;
using WebApp.ViewModels;

namespace Schedule.Middleware
{
    public class CustomForbiddenMiddleware
    {
        private readonly RequestDelegate _next;

        public CustomForbiddenMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            await _next(context);

            if (context.Response.StatusCode == (int)HttpStatusCode.Forbidden)
            {
                context.Response.ContentType = "application/json";
                var result = JsonSerializer.Serialize(new { error = "Forbidden access" });
                await context.Response.WriteAsync(result);
            }
        }
    }

    public static class CustomForbiddenMiddlewareExtensions
    {
        public static IApplicationBuilder UseCustomForbiddenMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<CustomForbiddenMiddleware>();
        }
    }
}
