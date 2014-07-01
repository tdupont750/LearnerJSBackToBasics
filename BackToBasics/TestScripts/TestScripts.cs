using Xunit.Extensions;
using XUnit.PhantomQ;

namespace BackToBasics.TestScripts
{
    public class TestScripts
    {
        [Theory, QUnitData("TestScripts/customFadeTests.js", "Scripts/Behaviors/customFade.js", "Scripts/jquery-1.10.2.js")]
        public void CustomFadeTests(QUnitTest test)
        {
            test.AssertSuccess();
        }

        [Theory, QUnitData("TestScripts/isPalindromeTests.js", "Scripts/isPalindrome.js", "Scripts/jquery-1.10.2.js")]
        public void IsPalindromeTests(QUnitTest test)
        {
            test.AssertSuccess();
        }
    }
}