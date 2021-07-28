<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(){
        $users = array (
            array("id"=>"101","name"=>"ABCD","dept"=>"SE"),
            array("id"=>"102","name"=>"EFGH","dept"=>"CIS"),
            array("id"=>"103","name"=>"IJKL","dept"=>"CSE"),
            array("id"=>"104","name"=>"MNOP","dept"=>"CSSE")
          );
        return response()->json($users);
    }
}
