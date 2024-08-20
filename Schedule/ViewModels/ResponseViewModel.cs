namespace WebApp.ViewModels
{
    public class ResponseViewModel<T>
    {
        public bool HasError { get; set; }
        public T? Data { get; set; } = default(T);
        public ErrorModel Error { get; set; }  = new ErrorModel();
    }    

    public class ErrorModel
    {
        public string ErrorType { get; set; } = "MessageText";
        public IList<ErrorDetail> Errors { get; set; } = new List<ErrorDetail>();
    }

    public class ErrorDetail
    {
        public string Name { get; set; } = string.Empty;
        public IList<string> Messages { get; set; } = new List<string>();
    }
}
