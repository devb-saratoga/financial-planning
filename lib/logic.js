'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Modify Portfolio Transaction
 * @param {com.devb.wm.ModifyPortfolio} tx
 * @transaction
 */
function onModifyPortfolio(tx) {
    var assetRegistry;
    var id = tx.portfolio.portfolioId;
    return getAssetRegistry('com.devb.wm.Portfolio')
        .then(function(ar) {
            assetRegistry = ar;
            return assetRegistry.get(id);
        })
        .then(function(asset) {
            portfolio.goals.allocation = tx.newAllocation;
            return assetRegistry.update(asset);
        });
}

/**
 * Optimize Transaction
 * @param {com.devb.wm.Optimize} tx
 * @transaction
 */
function onOptimize(tx) {
    var assetRegistry;
    var id = tx.portfolio.portfolioId;
    return getAssetRegistry('com.devb.wm.Portfolio')
        .then(function(ar) {
            assetRegistry = ar;
            return assetRegistry.get(id);
        })
        .then(function(asset) {
            portfolio.goals.allocation = tx.newAllocation;
            return assetRegistry.update(asset);
        });
}

/**
 * ClientReview Transaction
 * @param {com.devb.wm.ClientReview} tx
 * @transaction
 */
function onClientReview(tx) {
    var assetRegistry;
    var id = tx.portfolio.portfolioId;
    return getAssetRegistry('com.devb.wm.Portfolio')
        .then(function(ar) {
            assetRegistry = ar;
            return assetRegistry.get(id);
        })
        .then(function(asset) {
            portfolio.goals.allocation = tx.newAllocation;
            return assetRegistry.update(asset);
        });
}

/**
 * Sample transaction
 * @param {com.devb.wm.SetGoals} tx
 * @transaction
 */
function onSetGoals(tx) {
    var assetRegistry;
    var id = tx.client.clientId;
    var tclient = tx.client;
    var tgoals = tx.goals;
    return getAssetRegistry('com.devb.wm.Client')
        .then(function(ar) {
            assetRegistry = ar;
            return assetRegistry.get(id);
        })
        .then(function(asset) {
            return assetRegistry.update(tclient);
        });
    return getAssetRegistry('com.devb.wm.Goals')
        .then(function(ar) {
            assetRegistry = ar;
            return assetRegistry.get(id);
        })
        .then(function(asset) {
            return assetRegistry.update(tgoals);
        });
}