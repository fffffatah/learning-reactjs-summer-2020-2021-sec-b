<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function addProduct(Request $req){
        $product = new Product;
        $product->name = $req->name;
        $product->category = $req->category;
        $product->price = $req->price;
        $product->quantity = $req->quantity;
        $product->save();
        return response('Product Added', 200)
                  ->header('Content-Type', 'text/plain');
    }
    public function updateProduct(Request $req, $id){
        $product = Product::find($id);
        $product->name = $req->name;
        $product->category = $req->category;
        $product->price = $req->price;
        $product->quantity = $req->quantity;
        $product->save();
        return response('Product Updated', 200)
                  ->header('Content-Type', 'text/plain');
    }
    public function deleteProduct($id){
        if(Product::destroy($id)){
            return response('Product Deleted', 200)
                  ->header('Content-Type', 'text/plain');
        }
        return response('Product Not Found', 404)
                  ->header('Content-Type', 'text/plain');
    }
    public function getProduct($id){
        $product = Product::where('id',$id)->get();
        if(count($product)>0){
            return response()->json($product);
        }
        return response('Product Not Found', 404)
                  ->header('Content-Type', 'text/plain');
    }
    public function getProducts(){
        $products = Product::get();
        if(count($products)>0){
            return response()->json($products);
        }
        return response('Products Not Found', 404)
                  ->header('Content-Type', 'text/plain');
    }
    public function searchProduct($query){
        $products = Product::where('name','like',$query.'%')->get();
        if(count($products)>0){
            return response()->json($products);
        }
        return response('Product Not Found', 404)
                  ->header('Content-Type', 'text/plain');
    }
}
