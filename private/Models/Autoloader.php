<?php /** @noinspection PhpIllegalPsrClassPathInspection */

namespace FC\Models;

class Autoloader {
    /**
     * Autoloader to load the Classes in other documents
     * @param string $className
     * @return bool
     */
    static public function loader(string $className):bool
    {
        $className = substr($className, strpos($className, "\\"));
        $className = trim($className);
//        echo $className . "<br>";


        $fileName = "../../FactorioCalc/private/". str_replace("\\", '/', $className) . ".php";
//        echo $fileName . "<br>";
        if (file_exists($fileName)) {
            include($fileName);
//            echo "Data loaded" . "<br>";
            if (class_exists($className)) {
//                echo "True <br>";
                return TRUE;
            }
        }
        return FALSE;
    }
}

spl_autoload_register('\FC\Models\Autoloader::loader');