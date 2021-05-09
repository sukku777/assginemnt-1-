string="<p><strong><em>SkillSanta Assignments</em></strong></p>";

function strip_tags(str)
{
   if ((str===null) || (str===''))
       return false;
  else
   str = str.toString();
  return str.replace(/<[^>]*>/g, '');
}
console.log(strip_tags(string));
© 2021 GitHub, Inc.