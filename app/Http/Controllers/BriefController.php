<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBriefRequest;
use App\Http\Requests\UpdateBriefRequest;
use App\Models\Brief;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;




class BriefController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        return Inertia::render('Brief/Index', [
            'briefs' => Brief::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Brief/New');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBriefRequest $request)
    {
        $brief = Brief::create($request->validated());

        $brief->save();

        return Redirect::route('briefs.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Brief $brief)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Brief $brief)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBriefRequest $request, Brief $brief)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Brief $brief)
    {
        $brief->delete();
        return Redirect::to('/briefs');
    }
}
