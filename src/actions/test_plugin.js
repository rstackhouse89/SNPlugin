/**
 * @SNType sys_script_include
 * @SNApp test_plugin
 * @SNName testing_include
 */
//asdfasdfasdf
var grs = new GlideRecordSecure("sys_script_include");
grs.query("sys_id", "d840e57e4fb86300855601bda310c72f");
var count = 0;
while (grs.next())
{
//        grs.val = "val - " + grs.id;
    gs.info(grs.getValue("script"));
    count++
    // Testing Ryan's ability to change Shanes code
}
