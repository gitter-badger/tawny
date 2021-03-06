// source: Presence.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.tawny.HeartBeatInput', null, global);
goog.exportSymbol('proto.tawny.Presence', null, global);
goog.exportSymbol('proto.tawny.PresenceSubscribeInput', null, global);
goog.exportSymbol('proto.tawny.PresenceSubscribeResponse', null, global);
goog.exportSymbol('proto.tawny.PresenceSubscribeResponse.Type', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tawny.PresenceSubscribeInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tawny.PresenceSubscribeInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tawny.PresenceSubscribeInput.displayName = 'proto.tawny.PresenceSubscribeInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tawny.Presence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tawny.Presence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tawny.Presence.displayName = 'proto.tawny.Presence';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tawny.PresenceSubscribeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tawny.PresenceSubscribeResponse.repeatedFields_, null);
};
goog.inherits(proto.tawny.PresenceSubscribeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tawny.PresenceSubscribeResponse.displayName = 'proto.tawny.PresenceSubscribeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tawny.HeartBeatInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tawny.HeartBeatInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tawny.HeartBeatInput.displayName = 'proto.tawny.HeartBeatInput';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tawny.PresenceSubscribeInput.prototype.toObject = function(opt_includeInstance) {
  return proto.tawny.PresenceSubscribeInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tawny.PresenceSubscribeInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tawny.PresenceSubscribeInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    channel: jspb.Message.getFieldWithDefault(msg, 1, ""),
    topic: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tawny.PresenceSubscribeInput}
 */
proto.tawny.PresenceSubscribeInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tawny.PresenceSubscribeInput;
  return proto.tawny.PresenceSubscribeInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tawny.PresenceSubscribeInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tawny.PresenceSubscribeInput}
 */
proto.tawny.PresenceSubscribeInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannel(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tawny.PresenceSubscribeInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tawny.PresenceSubscribeInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tawny.PresenceSubscribeInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tawny.PresenceSubscribeInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannel();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string channel = 1;
 * @return {string}
 */
proto.tawny.PresenceSubscribeInput.prototype.getChannel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tawny.PresenceSubscribeInput} returns this
 */
proto.tawny.PresenceSubscribeInput.prototype.setChannel = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string topic = 2;
 * @return {string}
 */
proto.tawny.PresenceSubscribeInput.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tawny.PresenceSubscribeInput} returns this
 */
proto.tawny.PresenceSubscribeInput.prototype.setTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tawny.Presence.prototype.toObject = function(opt_includeInstance) {
  return proto.tawny.Presence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tawny.Presence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tawny.Presence.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: msg.getState_asB64(),
    key: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tawny.Presence}
 */
proto.tawny.Presence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tawny.Presence;
  return proto.tawny.Presence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tawny.Presence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tawny.Presence}
 */
proto.tawny.Presence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tawny.Presence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tawny.Presence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tawny.Presence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tawny.Presence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bytes state = 1;
 * @return {!(string|Uint8Array)}
 */
proto.tawny.Presence.prototype.getState = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes state = 1;
 * This is a type-conversion wrapper around `getState()`
 * @return {string}
 */
proto.tawny.Presence.prototype.getState_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getState()));
};


/**
 * optional bytes state = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getState()`
 * @return {!Uint8Array}
 */
proto.tawny.Presence.prototype.getState_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getState()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tawny.Presence} returns this
 */
proto.tawny.Presence.prototype.setState = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.tawny.Presence.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tawny.Presence} returns this
 */
proto.tawny.Presence.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tawny.PresenceSubscribeResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tawny.PresenceSubscribeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tawny.PresenceSubscribeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tawny.PresenceSubscribeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tawny.PresenceSubscribeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    presencesList: jspb.Message.toObjectList(msg.getPresencesList(),
    proto.tawny.Presence.toObject, includeInstance),
    updateType: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tawny.PresenceSubscribeResponse}
 */
proto.tawny.PresenceSubscribeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tawny.PresenceSubscribeResponse;
  return proto.tawny.PresenceSubscribeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tawny.PresenceSubscribeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tawny.PresenceSubscribeResponse}
 */
proto.tawny.PresenceSubscribeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tawny.Presence;
      reader.readMessage(value,proto.tawny.Presence.deserializeBinaryFromReader);
      msg.addPresences(value);
      break;
    case 2:
      var value = /** @type {!proto.tawny.PresenceSubscribeResponse.Type} */ (reader.readEnum());
      msg.setUpdateType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tawny.PresenceSubscribeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tawny.PresenceSubscribeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tawny.PresenceSubscribeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tawny.PresenceSubscribeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPresencesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tawny.Presence.serializeBinaryToWriter
    );
  }
  f = message.getUpdateType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.tawny.PresenceSubscribeResponse.Type = {
  FULL: 0,
  PARTIAL: 1
};

/**
 * repeated Presence presences = 1;
 * @return {!Array<!proto.tawny.Presence>}
 */
proto.tawny.PresenceSubscribeResponse.prototype.getPresencesList = function() {
  return /** @type{!Array<!proto.tawny.Presence>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tawny.Presence, 1));
};


/**
 * @param {!Array<!proto.tawny.Presence>} value
 * @return {!proto.tawny.PresenceSubscribeResponse} returns this
*/
proto.tawny.PresenceSubscribeResponse.prototype.setPresencesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tawny.Presence=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tawny.Presence}
 */
proto.tawny.PresenceSubscribeResponse.prototype.addPresences = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tawny.Presence, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tawny.PresenceSubscribeResponse} returns this
 */
proto.tawny.PresenceSubscribeResponse.prototype.clearPresencesList = function() {
  return this.setPresencesList([]);
};


/**
 * optional Type update_type = 2;
 * @return {!proto.tawny.PresenceSubscribeResponse.Type}
 */
proto.tawny.PresenceSubscribeResponse.prototype.getUpdateType = function() {
  return /** @type {!proto.tawny.PresenceSubscribeResponse.Type} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.tawny.PresenceSubscribeResponse.Type} value
 * @return {!proto.tawny.PresenceSubscribeResponse} returns this
 */
proto.tawny.PresenceSubscribeResponse.prototype.setUpdateType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tawny.HeartBeatInput.prototype.toObject = function(opt_includeInstance) {
  return proto.tawny.HeartBeatInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tawny.HeartBeatInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tawny.HeartBeatInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: msg.getState_asB64(),
    key: jspb.Message.getFieldWithDefault(msg, 2, ""),
    channel: jspb.Message.getFieldWithDefault(msg, 3, ""),
    topic: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tawny.HeartBeatInput}
 */
proto.tawny.HeartBeatInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tawny.HeartBeatInput;
  return proto.tawny.HeartBeatInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tawny.HeartBeatInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tawny.HeartBeatInput}
 */
proto.tawny.HeartBeatInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannel(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tawny.HeartBeatInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tawny.HeartBeatInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tawny.HeartBeatInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tawny.HeartBeatInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChannel();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional bytes state = 1;
 * @return {!(string|Uint8Array)}
 */
proto.tawny.HeartBeatInput.prototype.getState = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes state = 1;
 * This is a type-conversion wrapper around `getState()`
 * @return {string}
 */
proto.tawny.HeartBeatInput.prototype.getState_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getState()));
};


/**
 * optional bytes state = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getState()`
 * @return {!Uint8Array}
 */
proto.tawny.HeartBeatInput.prototype.getState_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getState()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tawny.HeartBeatInput} returns this
 */
proto.tawny.HeartBeatInput.prototype.setState = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.tawny.HeartBeatInput.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tawny.HeartBeatInput} returns this
 */
proto.tawny.HeartBeatInput.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string channel = 3;
 * @return {string}
 */
proto.tawny.HeartBeatInput.prototype.getChannel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tawny.HeartBeatInput} returns this
 */
proto.tawny.HeartBeatInput.prototype.setChannel = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string topic = 4;
 * @return {string}
 */
proto.tawny.HeartBeatInput.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.tawny.HeartBeatInput} returns this
 */
proto.tawny.HeartBeatInput.prototype.setTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


goog.object.extend(exports, proto.tawny);
