<?php
$i = 1;
foreach(glob("*.jpg") as $file)
{
    rename($file,$i.'.jpg');
    $i++;
}
