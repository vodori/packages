/**********************************************************************
 * Extern for lunr
 * Generated by http://jmmk.github.io/javascript-externs-generator
 * Then hand-tweaked so that non-optional arguments are better specced
 * and values used as constants are clarified.
 **********************************************************************/
var lunr = function(config){};
lunr.version = "2.1.5";

lunr.Builder = function(){};
lunr.FieldRef = function(docRef, fieldName, stringValue){};
lunr.FieldRef.fromString = function(s){};
lunr.FieldRef.joiner = "/";
lunr.Index = function(attrs){};
lunr.Index.load = function(serializedIndex){};
lunr.MatchData = function(term, field, metadata){};
lunr.Pipeline = function(){};
lunr.Pipeline.load = function(serialized){};
lunr.Pipeline.registerFunction = function(fn, label){};
lunr.Pipeline.registeredFunctions = {};
lunr.Pipeline.warnIfFunctionNotRegistered = function(fn){};
lunr.Query = function(allFields){};
lunr.Query.wildcard = {};
lunr.Query.wildcard.NONE = 0;
lunr.Query.wildcard.LEADING = 1;
lunr.Query.wildcard.TRAILING = 2;
lunr.QueryLexer = function(str){};
lunr.QueryLexer.EOS = 'EOS';
lunr.QueryLexer.FIELD = 'FIELD';
lunr.QueryLexer.TERM = 'TERM';
lunr.QueryLexer.EDIT_DISTANCE = 'EDIT_DISTANCE';
lunr.QueryLexer.BOOST = 'BOOST';
lunr.QueryLexer.lexBoost = function(lexer){};
lunr.QueryLexer.lexEOS = function(lexer){};
lunr.QueryLexer.lexEditDistance = function(lexer){};
lunr.QueryLexer.lexField = function(lexer){};
lunr.QueryLexer.lexTerm = function(lexer){};
lunr.QueryLexer.lexText = function(lexer){};
lunr.QueryLexer.termSeparator = {};
lunr.QueryParseError = function(message, start, end){};
lunr.QueryParser = function(str, query){};
lunr.QueryParser.parseBoost = function(parser){};
lunr.QueryParser.parseEditDistance = function(parser){};
lunr.QueryParser.parseField = function(parser){};
lunr.QueryParser.parseFieldOrTerm = function(parser){};
lunr.QueryParser.parseTerm = function(parser){};
lunr.Set = function(elements){};
lunr.Set.complete = {};
lunr.Set.empty = {};
lunr.Set.contains = function(object){};
lunr.Set.intersect = function(other){};
lunr.Set.union = function(other){};
lunr.Token = function(str, metadata){};
lunr.TokenSet = function(){};
lunr.TokenSet._nextId = {};
lunr.TokenSet.Builder = function(){};
lunr.TokenSet.fromArray = function(arr){};
lunr.TokenSet.fromClause = function(clause){};
lunr.TokenSet.fromFuzzyString = function(str, editDistance){};
lunr.TokenSet.fromString = function(str){};
lunr.Vector = function (elements){};
lunr.Vector.toArray = function (elements){};
lunr.Vector.toJSON = function (elements){};
lunr.Vector.similarity = function(otherVector){};
lunr.Vector.dot = function(otherVector){};
lunr.Vector.magnitude = function(){};
lunr.Vector.upsert = function(insertIdx, val, fn){};
lunr.Vector.insert = function(insertIdx, val){};
lunr.Vector.positionForIndex = function(index){};
lunr.generateStopWordFilter = function(stopWords){};
lunr.idf = function(posting, documentCount){};
lunr.stemmer = function(token){};
lunr.stemmer.label = {};
lunr.stopWordFilter = function(token){};
lunr.stopWordFilter.label = {};
lunr.tokenizer = function (){};
lunr.tokenizer.separator = /[\s\-]+/;
lunr.trimmer = function(token){};
lunr.trimmer.label = {};
lunr.utils = {};
lunr.utils.asString = function(){};
lunr.utils.warn = function(message){};

lunr.Builder.prototype = {
  "add": function (doc) {},
  "b": function (number) {},
  "build": function () {},
  "calculateAverageFieldLengths": function () {},
  "createFieldVectors": function () {},
  "createTokenSet": function () {},
  "field": function (field) {},
  "k1": function (number) {},
  "ref": function (ref) {},
  "use": function (fn) {}
};
lunr.FieldRef.prototype = {
  "toString": function () {}
};
lunr.Index.prototype = {
  "query": function (fn) {},
  "search": function (queryString) {},
  "toJSON": function () {}
};
lunr.MatchData.prototype = {
  "add": function (term, field, metadata) {},
  "combine": function (otherMatchData) {}
};
lunr.Pipeline.prototype = {
  "add": function () {},
  "after": function (existingFn, newFn) {},
  "before": function (existingFn, newFn) {},
  "remove": function (fn) {},
  "reset": function () {},
  "run": function (tokens) {},
  "runString": function (str) {},
  "toJSON": function () {}
};
lunr.Query.prototype = {
  "clause": function (clause) {},
  "term": function (term, options) {}
};
lunr.QueryLexer.prototype = {
  "acceptDigitRun": function () {},
  "backup": function () {},
  "emit": function (type) {},
  "escapeCharacter": function () {},
  "ignore": function () {},
  "more": function () {},
  "next": function () {},
  "run": function () {},
  "sliceString": function () {},
  "width": function () {}
};
lunr.QueryParser.prototype = {
  "consumeLexeme": function () {},
  "nextClause": function () {},
  "parse": function () {},
  "peekLexeme": function () {}
};
lunr.Token.prototype = {
  "clone": function () {},
  "toString": function () {},
  "update": function (fn) {}
};
lunr.TokenSet.prototype = {
  "intersect": function (b) {},
  "toArray": function () {},
  "toString": function () {}
};
lunr.TokenSet.Builder.prototype = {
  "finish": function () {},
  "insert": function (word) {},
  "minimize": function (downTo) {}
};
lunr.Vector.prototype = {
  "dot": function (otherVector) {},
  "insert": function (insertIdx, val) {},
  "magnitude": function () {},
  "positionForIndex": function (index) {},
  "similarity": function (otherVector) {},
  "toArray": function () {},
  "toJSON": function () {},
  "upsert": function (insertIdx, val, fn) {}
};
