import os
import librosa
import time
import tensorflow as tf
import pickle
from collections import Counter
import numpy as np
from flask import Flask,jsonify, request
# import pyrebase
import os
from os import path
from pydub import AudioSegment
 
# convert mp3 file to wav file

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
from tensorflow.keras.metrics import categorical_accuracy,top_k_categorical_accuracy
def top_5_accuracy(y_true, y_pred):
    return top_k_categorical_accuracy(y_true, y_pred, k=5)
app =Flask(__name__)

# resnet50_mfcc = tf.keras.models.load_model('./Mfcc/resnet50_Mfcc/my_model',
# custom_objects={'top_5_accuracy':top_5_accuracy})
# resnet50_DeltaMfcc = tf.keras.models.load_model('./Delta Mfcc/resnet50_deltaMfcc',
# custom_objects={'top_5_accuracy':top_5_accuracy})
# model3Mfcc = tf.keras.models.load_model('./Mfcc/sequential3-98ACC-500outlier.h5')
# model4Mfcc = tf.keras.models.load_model('./Mfcc/model_mfcc_96.h5')
# model3DeltaMfcc = tf.keras.models.load_model('./Delta Mfcc/model3DeltaMFCC.h5')
model4Deltamfcc = tf.keras.models.load_model('./Delta Mfcc/model_Deltamfcc_88.h5')

def load_file(file):
    if file.form.get('value') == '1':
        sound = AudioSegment.from_wav(file.files.get('file'))
    else:
        sound = AudioSegment.from_mp3(file.files.get('file'))
    sound.export('result.wav', format="wav")
    y, sr = librosa.load('./result.wav')
    return y, sr
def get_mfcc(y_sr):
    mfcc = librosa.feature.mfcc(y=y_sr[0], sr=y_sr[1])
    return mfcc.tolist()
def get_delta_mfcc(mfcc):
    mfcc = np.asarray(mfcc)
    mfcc_delta = librosa.feature.delta(mfcc)
    return mfcc_delta.tolist()
def apply_padding(mfcc):
    to_return = []
    for _ in mfcc:
        while len(_) != 512:
            _.append(0.0)
        to_return.append(_)
    return np.asarray(to_return)

@app.route('/time', methods = ["GET", "POST"]) 
def login():
  print("herere")
  print(request.values)
  print(request.files.get('file'))
  mfcc = get_mfcc(load_file(request))
  delta_mfcc = get_delta_mfcc(mfcc)
  mfcc = apply_padding(mfcc).reshape(-1,160, 16, 4)
  delta_mfcc = apply_padding(delta_mfcc).reshape(-1,160, 16, 4)

  # mfcc = apply_padding(get_mfcc(load_file())).reshape(-1,160, 16, 4)
#   PREDICTION_MODEL_3_MFCC = model3Mfcc.predict(mfcc)>0.5
#   PREDICTION_MODEL_4_MFCC = model4Mfcc.predict(mfcc)>0.5
#   PREDICTION_RESNET50_MFCC = resnet50_mfcc.predict(mfcc)>0.5
#   PREDICTION_RESNET50_DELTA_MFCC = resnet50_DeltaMfcc.predict(delta_mfcc)>0.5 
#   PREDICTION_MODEL_3_DELTAMFCC = model3DeltaMfcc.predict(delta_mfcc)>0.5
  PREDICTION_MODEL_4_DELTAMFCC = model4Deltamfcc.predict(delta_mfcc)>0.5
#   final_prediction = []
#   if PREDICTION_RESNET50_MFCC[0][0] == True:
#       final_prediction.append(1)
#   else:
#       final_prediction.append(0)
#   if PREDICTION_RESNET50_DELTA_MFCC[0][0] == True:
#       final_prediction.append(1)
#   else:
#       final_prediction.append(0)
#   if PREDICTION_MODEL_3_MFCC[0][0] == True:
#       final_prediction.append(1)
#   else:
#       final_prediction.append(0)
#   if PREDICTION_MODEL_4_MFCC[0][0] == False:
#       final_prediction.append(1)
#   else:
#       final_prediction.append(0)
#   if PREDICTION_MODEL_3_DELTAMFCC == False:
#       final_prediction.append(1)
#   else:
#       final_prediction.append(0)
#   if PREDICTION_MODEL_4_DELTAMFCC == False:
#       final_prediction.append(1)
#   else:
#       final_prediction.append(0)
  
#   final_prediction = Counter(final_prediction)
  
  if (PREDICTION_MODEL_4_DELTAMFCC == False):
      return jsonify(status=200, text="Healthy")
  else:
      return jsonify(status=200, text="Positive")

# if __name__ == '__main__':
#     app.run(host='127.0.0.1:5000')















