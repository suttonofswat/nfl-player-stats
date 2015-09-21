(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function Quarterback(name, team) {
	this.name = name;
	this.team = team;
	this.attempts = 0;
	this.completions = 0;
	this.yards = 0;
	this.touchdowns = 0;
	this.interceptions = 0;
	this.sacks = 0;
	this.longestCompletion = 0;

	this.completionPercentage = function () {
		return Math.round(this.completions / this.attempts * 100) + '%';
	};
	this.yardsPerAttempt = function () {
		return this.yards / this.attempts;
	};

	this.addAttempt = function (type, yards) {
		type = type.toLowerCase();
		if (type === 'completions') {
			this.attempts++;
			this.yards++;
			this.completions++;
		}
		if (yards > this.longestCompletion) {
			this.longestCompletion = yards;
		} else if (type === 'incompletions') {
			this.attempts++;
		} else if (type === 'touchdown') {
			this.touchdowns++;
			this.attempts++;
			this.completions++;
			this.yards += yards;
			if (yards > this.longestCompletion) {
				this.longestCompletion = yards;
			}
		} else if (type === 'sack') {
			this.sacks++;
			this.yards += yards;
		}
	};
}

function Rushing(name, team) {
	this.name = name;
	this.team = team;
	this.attempts = 0;
	this.yards = 0;
	this.over20 = 0;
	this.touchdowns = 0;
	this.firstDowns = 0;
	this.fumbles = 0;
	this.longestRush = 0;

	this.yardsPerAttempt = function () {
		return this.yards / this.attempts;
	};
	this.addAttempt = function (type, yards) {
		type = type.toLowerCase();
		if (type === 'fumble') {
			this.fumbles++;
			this.attempts++;
		} else if (type === 'firstDowns') {
			this.yards += yards;
			this.firstDowns++;
			this.attempts++;
			if (yards > 20) {
				this.over20++;
			}
			if (yards > this.longestRush) {
				this.longestRush = yards;
			}
		} else if (type === 'touchdown') {
			this.yards += yards;
			this.attempts++;
			this.touchdowns++;
			if (yards > 20) {
				this.over20++;
			}
			if (yards > this.longestRush) {
				this.longestRush = yards;
			}
		}
	};
}

function Kicking(name, team) {
	this.name = name;
	this.team = team;
	this.attempts = 0;
	this.made = 0;
	this.longestFieldGoal = 0;

	this.fieldGoalPercentage = function () {
		return Math.round(this.made / this.attempts * 100) + '%';
	};

	this.addAttempt = function (type, yards) {
		type = type.toLowerCase();
		if (type === 'made') {
			this.made++;
			this.attempts++;
			if (yards > this.longestFieldGoal) {
				this.longestFieldGoal = yards;
			}
		} else if (type === 'missed') {
			this.attempts++;
		}
	};
}

var stafford = new Quarterback('Matthew Stafford', 'Detroit Lions');
var manning = new Quarterback('Eli Manning', 'NY Giants');

var Megatron = new Rushing('Calvin Johnson', 'Detroit Lions');
var Beckham = new Rushing('Odell Beckham Jr.', 'NY Giants');

var Tom = new Kicking('Tom', 'No Team');
var Paul = new Kicking('Paul', 'Los Angeles Raiders');

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map