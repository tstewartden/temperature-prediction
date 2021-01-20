export default {
    textContents: {
        "Training an automated neural network": [
            {
                'method': "Like other environmental models, ANNs are trained using a set of observed data. To predict stream temperature, we provide the ANN model with input data (precipitation and air temperature records) and output data (observed stream temperatures). During training, the model 'learns' through its attempts to find a pattern linking the inputs and the output. Keep in mind that the model only sees this information as numbers – it has no idea how the inputs and output may be physically related.",
                'flubber_id': 'ANN1',
                'bees_id': 'step_error'
            },
            {
                'method': "The first component of an ANN is called an input layer – this is where the model receives the raw input data.",
                'flubber_id': 'ANN2',
                'bees_id': 'step_error_exp'
            },
            {
                'method': "From the input layer, the information is passed to what is known as a ‘hidden’ layer through a series of connections. Each connection transmits an input value to a processing node in the hidden layer. The model can vary the weight of these connections to assign more or less importance to a particular piece of information.",
                'flubber_id': 'ANN3',
                'bees_id': 'step_error_exp'
            },
            {
                'method': "In the hidden layer, the receiving nodes compute a weighted sum of the received information…",
                'flubber_id': 'ANN4',
                'bees_id': 'step_error_exp'
            },
            {
                'method': "…and then pass the weighted sum through a mathematical function, producing a single output value for each node. ",
                'flubber_id': 'ANN5',
                'bees_id': 'step_error_exp'
            },
            {
                'method': "These output values are then passed to nodes in the next hidden layer, or, if there are no more hidden layers, to the output layer.",
                'flubber_id': 'ANN6',
                'bees_id': 'step_error_exp'
            },
            {
                'method': "The output layer computes a weighted sum of the information received from the hidden layer…",
                'flubber_id': 'ANN7',
                'bees_id': 'step_error_exp'
            },
            {
                'method': "And passes the sum through a mathematical function to produce a final output value.",
                'flubber_id': 'ANN8',
                'bees_id': 'step_error_exp'
            },
            {
                'method': "This value is the model’s prediction of stream temperature, given the air temperature and precipitation values provided as input to the model.",
                'flubber_id': 'ANN9',
                'bees_id': 'step_error_exp'
            },
            {
                'method': "The model compares the predicted value to the observed stream temperature. The difference between the two values represents the error associated with the prediction. Since the first set of weights and connections are initialized randomly, the model is pretty far off to begin with.",
                'flubber_id': 'ANN10',
                'bees_id': 'step_error_exp'
            },
            {
                'method': "The model attempts to reduce the error by going back and adjusting the weights throughout the model. It then generates a new prediction and computes the new error. Importantly, the model doesn’t adjust weights in any logical way – it merely tries hundreds of combinations of weights and evaluates the model performance for each set of weights.",
                'flubber_id': 'ANN11',
                'bees_id': 'step_error_exp'
            },
            {
                'method': "The model keeps testing weights and evaluating the error associated with stream temperature predictions for every location and every day that we have monitoring data in the Delaware River Basin.",
                'flubber_id': 'ANN12',
                'bees_id': 'step_error_exp'
            },
            {
                'method': "Eventually, the model lands on a set of weights that produces the most accurate predictions based on the training data. At this point the model is considered ‘trained’ and can be used to make predictions using new sets of input data. But keep in mind that the model will never be perfect, even when fully trained, and will perform better for some places and times than others.",
                'flubber_id': 'ANN13',
                'bees_id': 'step_error_exp'
            }],
        "Testing an artificial neural network (ANN)": [
            {
                'method': "As an example, here we show daily temperature predictions for a stream reach over a one month period",
                'flubber_id': '',
                'bees_id': 'step_error_exp'
            },
            {
                'method': "Prediction error, or the difference between predicted temperatures and measured observations, is small when the model can accurately predict the observed water temperature.",
                'flubber_id': '',
                'bees_id': 'step_error_obs'
            }],
        "Evaluating overall model accuracy": [
            {
                'method': "We can summarize daily prediction errors, for example by taking the root mean squared error (RMSE), in order to evaluate how well the model is capturing the temperature dynamics of the stream reach. Small errors translate to low RMSE, indicating the model is accurately predicting water temperature. Large errors and high RMSE indicates the model is doing a poor job of predicting water temperature dynamics.",
                'flubber_id': '',
                'bees_id': 'step_error_rmse'
            }, {
                'method': "Using RMSE we can compare different models or assess accuracy in time, space, and under different conditions. Here we show model RMSE for a subset of stream reaches in the Basin based on all available data in the training period.",
                'flubber_id': '',
                'bees_id': 'step_ann'
            }],
        "Model performance under restricted data availability": [
            {
                'method': "But recall that the Delaware River Basin is one of the most observed basins in the U.S. How does the ANN perform when we don't have a lot of training data?",
                'flubber_id': '',
                'bees_id': 'step_ann'
            },
            {
                'method': "We artificially reduced the amount of data used to train the model, and compared the models built on different data availability schemes",
                'flubber_id': '',
                'bees_id': 'step_ann'
            },
            {
                'method': "For the ANN, when 2% and 0.01% of the training data is used, the models become less accurate and have a hard time capturing temperature dynamics of the river.",
                'flubber_id': '',
                'bees_id': 'step_ann_exp'
            },
            {
                'method': "So how can we improve the ANN so that it does better even when we lack temperature observations?",
                'flubber_id': '',
                'bees_id': 'step_ann_exp'
            },
            {
                'method': "In reality, humans already know a lot about water temperature. Without observations, we can guess water temperature will be the warmest in the summer or that forested headwater streams are cooler than large urban streams.",
                'flubber_id': '',
                'bees_id': 'step_ann_exp'
            },
             {
                'method': "How can we tell a machine what we already know?",
                'flubber_id': '',
                'bees_id': 'step_ann_exp'
            },
        ],
        "Recurrent neural network (RNN)": [
            {
                'method': "One of the simplest things we know about streams is how time can be used in our favor. Put simply, the water temperature today is likely to be similar the water temperature tomorrow. For data-driven modeling, this is as simple as using models that have memory or allow information from one timestep to be passed on to the next time step. The model we used is called a recurrent neural network (RNN)",
                'flubber_id': 'RNN',
                'bees_id': 'step_ann_exp'
            },
            {
                'method': "In the DRB, giving the model a memory improved accuracy in some reaches but became more inaccurate in others.",
                'flubber_id': 'RNN',
                'bees_id': 'step_rnn'
            }],
        "Graph convolutional network": [
            {
                'method': "You don’t need to be a hydrologist to know water flows downstream, and that means the water temperature in downstream segments is likely to be similar to that in upstream segments. We can use these spatial relationships to leverage information across the stream network.",
                'flubber_id': 'RGCN',
                'bees_id': 'step_rnn'
            },
            {
                'method': "The way we inform the model about space is by calculating the distance between stream segments and allowing the model to weight information based on distance. Information coming from a nearby stream will be weighted more heavily than information coming from a far away stream. The method we used is called a graph convolutional network.",
                'flubber_id': 'RGCN_2',
                'bees_id': 'step_rnn'
            },
            {
                'method': "In the DRB, adding information about the spatial configuration of the river network improves predictions.",
                'flubber_id': 'RGCN_2',
                'bees_id': 'step_rgcn'
            }],
        "Knowledge-guided deep learning": [
            {
                'method': "Beyond space and time, We know quite a bit about how and why streams gain or lose heat – we shouldn’t ignore this wealth of knowledge simply because we’re using a data-driven approach. These processes are intuitive – warm, sunny days should warm streams, and cold, cloudy days should cool streams.",
                'flubber_id': 'RGCN_ptrn',
                'bees_id': 'step_rgcn'
            },
            {
                'method': "Scientists have written heat loss and gain rules into equations that can make temperature predictions that generally follow the laws of physics. We can use these equations to make temperature predictions for all places and times in the Basin, and treat these predictions as “real data” to train our neural network.",
                'flubber_id': '',
                'bees_id': 'step_rgcn'
            },
             {
                'method': "Without any real temperature observations, the machine learning model 'learns' physics. We call this method process-guided deep learning.",
                'flubber_id': '',
                'bees_id': 'step_rgcn'
            },
            {
                'method': "And the great news? Now that the deep learning model the general physics of the system, it can do more with less. Even when very little (< 1%) temperature data is available for training, the model is still able to make accurate predictions.",
                'flubber_id': '',
                'bees_id': 'step_rgcn_ptrn'
            }]
    }
}
