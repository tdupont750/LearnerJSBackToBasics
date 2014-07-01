using XUnit.PhantomQ;
using Xunit.Extensions;

namespace BackToBasics
{
    public class QUnitTests
    {
        [Theory(Skip = "Example"), QUnitData("ExampleTests.js", "Dependency.js")]
        public void ExampleTests(QUnitTest test)
        {
            test.AssertSuccess();
        }
    }
}
