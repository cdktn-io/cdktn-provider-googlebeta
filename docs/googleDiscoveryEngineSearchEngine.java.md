# `googleDiscoveryEngineSearchEngine` Submodule <a name="`googleDiscoveryEngineSearchEngine` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineSearchEngine <a name="GoogleDiscoveryEngineSearchEngine" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine google_discovery_engine_search_engine}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_search_engine.GoogleDiscoveryEngineSearchEngine;

GoogleDiscoveryEngineSearchEngine.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .collectionId(java.lang.String)
    .dataStoreIds(java.util.List<java.lang.String>)
    .displayName(java.lang.String)
    .engineId(java.lang.String)
    .location(java.lang.String)
    .searchEngineConfig(GoogleDiscoveryEngineSearchEngineSearchEngineConfig)
//  .appType(java.lang.String)
//  .commonConfig(GoogleDiscoveryEngineSearchEngineCommonConfig)
//  .deletionPolicy(java.lang.String)
//  .disableAnalytics(java.lang.Boolean|IResolvable)
//  .features(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .industryVertical(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .knowledgeGraphConfig(GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig)
//  .project(java.lang.String)
//  .timeouts(GoogleDiscoveryEngineSearchEngineTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The collection ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.dataStoreIds">dataStoreIds</a></code> | <code>java.util.List<java.lang.String></code> | The data stores associated with this engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.engineId">engineId</a></code> | <code>java.lang.String</code> | Unique ID to use for Search Engine App. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.searchEngineConfig">searchEngineConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig">GoogleDiscoveryEngineSearchEngineSearchEngineConfig</a></code> | search_engine_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.appType">appType</a></code> | <code>java.lang.String</code> | This is the application type this engine resource represents. The supported values: 'APP_TYPE_UNSPECIFIED', 'APP_TYPE_INTRANET'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.commonConfig">commonConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig">GoogleDiscoveryEngineSearchEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.disableAnalytics">disableAnalytics</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable analytics for searches performed on this engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.features">features</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of the feature config for the engine to opt in or opt out of features. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#id GoogleDiscoveryEngineSearchEngine#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.industryVertical">industryVertical</a></code> | <code>java.lang.String</code> | The industry vertical that the engine registers. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The KMS key to be used to protect this Engine at creation time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.knowledgeGraphConfig">knowledgeGraphConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig</a></code> | knowledge_graph_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#project GoogleDiscoveryEngineSearchEngine#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts">GoogleDiscoveryEngineSearchEngineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.collectionId"></a>

- *Type:* java.lang.String

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#collection_id GoogleDiscoveryEngineSearchEngine#collection_id}

---

##### `dataStoreIds`<sup>Required</sup> <a name="dataStoreIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.dataStoreIds"></a>

- *Type:* java.util.List<java.lang.String>

The data stores associated with this engine.

For SOLUTION_TYPE_SEARCH type of engines, they can only associate with at most one data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#data_store_ids GoogleDiscoveryEngineSearchEngine#data_store_ids}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#display_name GoogleDiscoveryEngineSearchEngine#display_name}

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.engineId"></a>

- *Type:* java.lang.String

Unique ID to use for Search Engine App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#engine_id GoogleDiscoveryEngineSearchEngine#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#location GoogleDiscoveryEngineSearchEngine#location}

---

##### `searchEngineConfig`<sup>Required</sup> <a name="searchEngineConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.searchEngineConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig">GoogleDiscoveryEngineSearchEngineSearchEngineConfig</a>

search_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#search_engine_config GoogleDiscoveryEngineSearchEngine#search_engine_config}

---

##### `appType`<sup>Optional</sup> <a name="appType" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.appType"></a>

- *Type:* java.lang.String

This is the application type this engine resource represents. The supported values: 'APP_TYPE_UNSPECIFIED', 'APP_TYPE_INTRANET'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#app_type GoogleDiscoveryEngineSearchEngine#app_type}

---

##### `commonConfig`<sup>Optional</sup> <a name="commonConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.commonConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig">GoogleDiscoveryEngineSearchEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#common_config GoogleDiscoveryEngineSearchEngine#common_config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#deletion_policy GoogleDiscoveryEngineSearchEngine#deletion_policy}

---

##### `disableAnalytics`<sup>Optional</sup> <a name="disableAnalytics" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.disableAnalytics"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable analytics for searches performed on this engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#disable_analytics GoogleDiscoveryEngineSearchEngine#disable_analytics}

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.features"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of the feature config for the engine to opt in or opt out of features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#features GoogleDiscoveryEngineSearchEngine#features}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#id GoogleDiscoveryEngineSearchEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `industryVertical`<sup>Optional</sup> <a name="industryVertical" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.industryVertical"></a>

- *Type:* java.lang.String

The industry vertical that the engine registers.

The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine. Default value: "GENERIC" Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#industry_vertical GoogleDiscoveryEngineSearchEngine#industry_vertical}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.kmsKeyName"></a>

- *Type:* java.lang.String

The KMS key to be used to protect this Engine at creation time.

Must be set for requests that need to comply with CMEK Org Policy
protections.

If this field is set and processed successfully, the Engine will be
protected by the KMS key, as indicated in the cmek_config field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#kms_key_name GoogleDiscoveryEngineSearchEngine#kms_key_name}

---

##### `knowledgeGraphConfig`<sup>Optional</sup> <a name="knowledgeGraphConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.knowledgeGraphConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig</a>

knowledge_graph_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#knowledge_graph_config GoogleDiscoveryEngineSearchEngine#knowledge_graph_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#project GoogleDiscoveryEngineSearchEngine#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts">GoogleDiscoveryEngineSearchEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#timeouts GoogleDiscoveryEngineSearchEngine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putCommonConfig">putCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putKnowledgeGraphConfig">putKnowledgeGraphConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putSearchEngineConfig">putSearchEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetAppType">resetAppType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetCommonConfig">resetCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetDisableAnalytics">resetDisableAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetFeatures">resetFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetIndustryVertical">resetIndustryVertical</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetKnowledgeGraphConfig">resetKnowledgeGraphConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCommonConfig` <a name="putCommonConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putCommonConfig"></a>

```java
public void putCommonConfig(GoogleDiscoveryEngineSearchEngineCommonConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putCommonConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig">GoogleDiscoveryEngineSearchEngineCommonConfig</a>

---

##### `putKnowledgeGraphConfig` <a name="putKnowledgeGraphConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putKnowledgeGraphConfig"></a>

```java
public void putKnowledgeGraphConfig(GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putKnowledgeGraphConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig</a>

---

##### `putSearchEngineConfig` <a name="putSearchEngineConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putSearchEngineConfig"></a>

```java
public void putSearchEngineConfig(GoogleDiscoveryEngineSearchEngineSearchEngineConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putSearchEngineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig">GoogleDiscoveryEngineSearchEngineSearchEngineConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putTimeouts"></a>

```java
public void putTimeouts(GoogleDiscoveryEngineSearchEngineTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts">GoogleDiscoveryEngineSearchEngineTimeouts</a>

---

##### `resetAppType` <a name="resetAppType" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetAppType"></a>

```java
public void resetAppType()
```

##### `resetCommonConfig` <a name="resetCommonConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetCommonConfig"></a>

```java
public void resetCommonConfig()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisableAnalytics` <a name="resetDisableAnalytics" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetDisableAnalytics"></a>

```java
public void resetDisableAnalytics()
```

##### `resetFeatures` <a name="resetFeatures" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetFeatures"></a>

```java
public void resetFeatures()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetId"></a>

```java
public void resetId()
```

##### `resetIndustryVertical` <a name="resetIndustryVertical" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetIndustryVertical"></a>

```java
public void resetIndustryVertical()
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetKmsKeyName"></a>

```java
public void resetKmsKeyName()
```

##### `resetKnowledgeGraphConfig` <a name="resetKnowledgeGraphConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetKnowledgeGraphConfig"></a>

```java
public void resetKnowledgeGraphConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineSearchEngine resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_search_engine.GoogleDiscoveryEngineSearchEngine;

GoogleDiscoveryEngineSearchEngine.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_search_engine.GoogleDiscoveryEngineSearchEngine;

GoogleDiscoveryEngineSearchEngine.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_search_engine.GoogleDiscoveryEngineSearchEngine;

GoogleDiscoveryEngineSearchEngine.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_search_engine.GoogleDiscoveryEngineSearchEngine;

GoogleDiscoveryEngineSearchEngine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDiscoveryEngineSearchEngine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleDiscoveryEngineSearchEngine resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDiscoveryEngineSearchEngine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDiscoveryEngineSearchEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineSearchEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.commonConfig">commonConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference">GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.knowledgeGraphConfig">knowledgeGraphConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.searchEngineConfig">searchEngineConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference">GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference">GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.appTypeInput">appTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.collectionIdInput">collectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.commonConfigInput">commonConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig">GoogleDiscoveryEngineSearchEngineCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.dataStoreIdsInput">dataStoreIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.disableAnalyticsInput">disableAnalyticsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.engineIdInput">engineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.featuresInput">featuresInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.industryVerticalInput">industryVerticalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.knowledgeGraphConfigInput">knowledgeGraphConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.searchEngineConfigInput">searchEngineConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig">GoogleDiscoveryEngineSearchEngineSearchEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts">GoogleDiscoveryEngineSearchEngineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.appType">appType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.dataStoreIds">dataStoreIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.disableAnalytics">disableAnalytics</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.engineId">engineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.features">features</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.industryVertical">industryVertical</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `commonConfig`<sup>Required</sup> <a name="commonConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.commonConfig"></a>

```java
public GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference getCommonConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference">GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `knowledgeGraphConfig`<sup>Required</sup> <a name="knowledgeGraphConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.knowledgeGraphConfig"></a>

```java
public GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference getKnowledgeGraphConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `searchEngineConfig`<sup>Required</sup> <a name="searchEngineConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.searchEngineConfig"></a>

```java
public GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference getSearchEngineConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference">GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.timeouts"></a>

```java
public GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference">GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `appTypeInput`<sup>Optional</sup> <a name="appTypeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.appTypeInput"></a>

```java
public java.lang.String getAppTypeInput();
```

- *Type:* java.lang.String

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.collectionIdInput"></a>

```java
public java.lang.String getCollectionIdInput();
```

- *Type:* java.lang.String

---

##### `commonConfigInput`<sup>Optional</sup> <a name="commonConfigInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.commonConfigInput"></a>

```java
public GoogleDiscoveryEngineSearchEngineCommonConfig getCommonConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig">GoogleDiscoveryEngineSearchEngineCommonConfig</a>

---

##### `dataStoreIdsInput`<sup>Optional</sup> <a name="dataStoreIdsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.dataStoreIdsInput"></a>

```java
public java.util.List<java.lang.String> getDataStoreIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `disableAnalyticsInput`<sup>Optional</sup> <a name="disableAnalyticsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.disableAnalyticsInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableAnalyticsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `engineIdInput`<sup>Optional</sup> <a name="engineIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.engineIdInput"></a>

```java
public java.lang.String getEngineIdInput();
```

- *Type:* java.lang.String

---

##### `featuresInput`<sup>Optional</sup> <a name="featuresInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.featuresInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFeaturesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `industryVerticalInput`<sup>Optional</sup> <a name="industryVerticalInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.industryVerticalInput"></a>

```java
public java.lang.String getIndustryVerticalInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `knowledgeGraphConfigInput`<sup>Optional</sup> <a name="knowledgeGraphConfigInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.knowledgeGraphConfigInput"></a>

```java
public GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig getKnowledgeGraphConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `searchEngineConfigInput`<sup>Optional</sup> <a name="searchEngineConfigInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.searchEngineConfigInput"></a>

```java
public GoogleDiscoveryEngineSearchEngineSearchEngineConfig getSearchEngineConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig">GoogleDiscoveryEngineSearchEngineSearchEngineConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.timeoutsInput"></a>

```java
public IResolvable|GoogleDiscoveryEngineSearchEngineTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts">GoogleDiscoveryEngineSearchEngineTimeouts</a>

---

##### `appType`<sup>Required</sup> <a name="appType" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.appType"></a>

```java
public java.lang.String getAppType();
```

- *Type:* java.lang.String

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

---

##### `dataStoreIds`<sup>Required</sup> <a name="dataStoreIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.dataStoreIds"></a>

```java
public java.util.List<java.lang.String> getDataStoreIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `disableAnalytics`<sup>Required</sup> <a name="disableAnalytics" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.disableAnalytics"></a>

```java
public java.lang.Boolean|IResolvable getDisableAnalytics();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.engineId"></a>

```java
public java.lang.String getEngineId();
```

- *Type:* java.lang.String

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.features"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFeatures();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `industryVertical`<sup>Required</sup> <a name="industryVertical" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.industryVertical"></a>

```java
public java.lang.String getIndustryVertical();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineSearchEngineCommonConfig <a name="GoogleDiscoveryEngineSearchEngineCommonConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_search_engine.GoogleDiscoveryEngineSearchEngineCommonConfig;

GoogleDiscoveryEngineSearchEngineCommonConfig.builder()
//  .companyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig.property.companyName">companyName</a></code> | <code>java.lang.String</code> | The name of the company, business or entity that is associated with the engine. |

---

##### `companyName`<sup>Optional</sup> <a name="companyName" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

The name of the company, business or entity that is associated with the engine.

Setting this may help improve LLM related features.cd

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#company_name GoogleDiscoveryEngineSearchEngine#company_name}

---

### GoogleDiscoveryEngineSearchEngineConfig <a name="GoogleDiscoveryEngineSearchEngineConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_search_engine.GoogleDiscoveryEngineSearchEngineConfig;

GoogleDiscoveryEngineSearchEngineConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .collectionId(java.lang.String)
    .dataStoreIds(java.util.List<java.lang.String>)
    .displayName(java.lang.String)
    .engineId(java.lang.String)
    .location(java.lang.String)
    .searchEngineConfig(GoogleDiscoveryEngineSearchEngineSearchEngineConfig)
//  .appType(java.lang.String)
//  .commonConfig(GoogleDiscoveryEngineSearchEngineCommonConfig)
//  .deletionPolicy(java.lang.String)
//  .disableAnalytics(java.lang.Boolean|IResolvable)
//  .features(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .industryVertical(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .knowledgeGraphConfig(GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig)
//  .project(java.lang.String)
//  .timeouts(GoogleDiscoveryEngineSearchEngineTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The collection ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.dataStoreIds">dataStoreIds</a></code> | <code>java.util.List<java.lang.String></code> | The data stores associated with this engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.engineId">engineId</a></code> | <code>java.lang.String</code> | Unique ID to use for Search Engine App. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.searchEngineConfig">searchEngineConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig">GoogleDiscoveryEngineSearchEngineSearchEngineConfig</a></code> | search_engine_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.appType">appType</a></code> | <code>java.lang.String</code> | This is the application type this engine resource represents. The supported values: 'APP_TYPE_UNSPECIFIED', 'APP_TYPE_INTRANET'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.commonConfig">commonConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig">GoogleDiscoveryEngineSearchEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.disableAnalytics">disableAnalytics</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable analytics for searches performed on this engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.features">features</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of the feature config for the engine to opt in or opt out of features. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#id GoogleDiscoveryEngineSearchEngine#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.industryVertical">industryVertical</a></code> | <code>java.lang.String</code> | The industry vertical that the engine registers. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The KMS key to be used to protect this Engine at creation time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.knowledgeGraphConfig">knowledgeGraphConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig</a></code> | knowledge_graph_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#project GoogleDiscoveryEngineSearchEngine#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts">GoogleDiscoveryEngineSearchEngineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#collection_id GoogleDiscoveryEngineSearchEngine#collection_id}

---

##### `dataStoreIds`<sup>Required</sup> <a name="dataStoreIds" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.dataStoreIds"></a>

```java
public java.util.List<java.lang.String> getDataStoreIds();
```

- *Type:* java.util.List<java.lang.String>

The data stores associated with this engine.

For SOLUTION_TYPE_SEARCH type of engines, they can only associate with at most one data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#data_store_ids GoogleDiscoveryEngineSearchEngine#data_store_ids}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#display_name GoogleDiscoveryEngineSearchEngine#display_name}

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.engineId"></a>

```java
public java.lang.String getEngineId();
```

- *Type:* java.lang.String

Unique ID to use for Search Engine App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#engine_id GoogleDiscoveryEngineSearchEngine#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#location GoogleDiscoveryEngineSearchEngine#location}

---

##### `searchEngineConfig`<sup>Required</sup> <a name="searchEngineConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.searchEngineConfig"></a>

```java
public GoogleDiscoveryEngineSearchEngineSearchEngineConfig getSearchEngineConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig">GoogleDiscoveryEngineSearchEngineSearchEngineConfig</a>

search_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#search_engine_config GoogleDiscoveryEngineSearchEngine#search_engine_config}

---

##### `appType`<sup>Optional</sup> <a name="appType" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.appType"></a>

```java
public java.lang.String getAppType();
```

- *Type:* java.lang.String

This is the application type this engine resource represents. The supported values: 'APP_TYPE_UNSPECIFIED', 'APP_TYPE_INTRANET'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#app_type GoogleDiscoveryEngineSearchEngine#app_type}

---

##### `commonConfig`<sup>Optional</sup> <a name="commonConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.commonConfig"></a>

```java
public GoogleDiscoveryEngineSearchEngineCommonConfig getCommonConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig">GoogleDiscoveryEngineSearchEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#common_config GoogleDiscoveryEngineSearchEngine#common_config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#deletion_policy GoogleDiscoveryEngineSearchEngine#deletion_policy}

---

##### `disableAnalytics`<sup>Optional</sup> <a name="disableAnalytics" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.disableAnalytics"></a>

```java
public java.lang.Boolean|IResolvable getDisableAnalytics();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable analytics for searches performed on this engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#disable_analytics GoogleDiscoveryEngineSearchEngine#disable_analytics}

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.features"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFeatures();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of the feature config for the engine to opt in or opt out of features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#features GoogleDiscoveryEngineSearchEngine#features}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#id GoogleDiscoveryEngineSearchEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `industryVertical`<sup>Optional</sup> <a name="industryVertical" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.industryVertical"></a>

```java
public java.lang.String getIndustryVertical();
```

- *Type:* java.lang.String

The industry vertical that the engine registers.

The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine. Default value: "GENERIC" Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#industry_vertical GoogleDiscoveryEngineSearchEngine#industry_vertical}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The KMS key to be used to protect this Engine at creation time.

Must be set for requests that need to comply with CMEK Org Policy
protections.

If this field is set and processed successfully, the Engine will be
protected by the KMS key, as indicated in the cmek_config field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#kms_key_name GoogleDiscoveryEngineSearchEngine#kms_key_name}

---

##### `knowledgeGraphConfig`<sup>Optional</sup> <a name="knowledgeGraphConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.knowledgeGraphConfig"></a>

```java
public GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig getKnowledgeGraphConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig</a>

knowledge_graph_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#knowledge_graph_config GoogleDiscoveryEngineSearchEngine#knowledge_graph_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#project GoogleDiscoveryEngineSearchEngine#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.timeouts"></a>

```java
public GoogleDiscoveryEngineSearchEngineTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts">GoogleDiscoveryEngineSearchEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#timeouts GoogleDiscoveryEngineSearchEngine#timeouts}

---

### GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig <a name="GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_search_engine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig;

GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.builder()
//  .cloudKnowledgeGraphTypes(java.util.List<java.lang.String>)
//  .enableCloudKnowledgeGraph(java.lang.Boolean|IResolvable)
//  .enablePrivateKnowledgeGraph(java.lang.Boolean|IResolvable)
//  .featureConfig(GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.property.cloudKnowledgeGraphTypes">cloudKnowledgeGraphTypes</a></code> | <code>java.util.List<java.lang.String></code> | Specify entity types to support. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.property.enableCloudKnowledgeGraph">enableCloudKnowledgeGraph</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable the Cloud Knowledge Graph for the engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.property.enablePrivateKnowledgeGraph">enablePrivateKnowledgeGraph</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable the Private Knowledge Graph for the engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.property.featureConfig">featureConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a></code> | feature_config block. |

---

##### `cloudKnowledgeGraphTypes`<sup>Optional</sup> <a name="cloudKnowledgeGraphTypes" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.property.cloudKnowledgeGraphTypes"></a>

```java
public java.util.List<java.lang.String> getCloudKnowledgeGraphTypes();
```

- *Type:* java.util.List<java.lang.String>

Specify entity types to support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#cloud_knowledge_graph_types GoogleDiscoveryEngineSearchEngine#cloud_knowledge_graph_types}

---

##### `enableCloudKnowledgeGraph`<sup>Optional</sup> <a name="enableCloudKnowledgeGraph" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.property.enableCloudKnowledgeGraph"></a>

```java
public java.lang.Boolean|IResolvable getEnableCloudKnowledgeGraph();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable the Cloud Knowledge Graph for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#enable_cloud_knowledge_graph GoogleDiscoveryEngineSearchEngine#enable_cloud_knowledge_graph}

---

##### `enablePrivateKnowledgeGraph`<sup>Optional</sup> <a name="enablePrivateKnowledgeGraph" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.property.enablePrivateKnowledgeGraph"></a>

```java
public java.lang.Boolean|IResolvable getEnablePrivateKnowledgeGraph();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable the Private Knowledge Graph for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#enable_private_knowledge_graph GoogleDiscoveryEngineSearchEngine#enable_private_knowledge_graph}

---

##### `featureConfig`<sup>Optional</sup> <a name="featureConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.property.featureConfig"></a>

```java
public GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig getFeatureConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a>

feature_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#feature_config GoogleDiscoveryEngineSearchEngine#feature_config}

---

### GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig <a name="GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_search_engine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig;

GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.builder()
//  .disablePrivateKgAutoComplete(java.lang.Boolean|IResolvable)
//  .disablePrivateKgEnrichment(java.lang.Boolean|IResolvable)
//  .disablePrivateKgQueryUiChips(java.lang.Boolean|IResolvable)
//  .disablePrivateKgQueryUnderstanding(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgAutoComplete">disablePrivateKgAutoComplete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable the private KG auto complete for the engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgEnrichment">disablePrivateKgEnrichment</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable the private KG enrichment for the engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgQueryUiChips">disablePrivateKgQueryUiChips</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable the private KG for query UI chips. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgQueryUnderstanding">disablePrivateKgQueryUnderstanding</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable the private KG query understanding for the engine. |

---

##### `disablePrivateKgAutoComplete`<sup>Optional</sup> <a name="disablePrivateKgAutoComplete" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgAutoComplete"></a>

```java
public java.lang.Boolean|IResolvable getDisablePrivateKgAutoComplete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable the private KG auto complete for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#disable_private_kg_auto_complete GoogleDiscoveryEngineSearchEngine#disable_private_kg_auto_complete}

---

##### `disablePrivateKgEnrichment`<sup>Optional</sup> <a name="disablePrivateKgEnrichment" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgEnrichment"></a>

```java
public java.lang.Boolean|IResolvable getDisablePrivateKgEnrichment();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable the private KG enrichment for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#disable_private_kg_enrichment GoogleDiscoveryEngineSearchEngine#disable_private_kg_enrichment}

---

##### `disablePrivateKgQueryUiChips`<sup>Optional</sup> <a name="disablePrivateKgQueryUiChips" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgQueryUiChips"></a>

```java
public java.lang.Boolean|IResolvable getDisablePrivateKgQueryUiChips();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable the private KG for query UI chips.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#disable_private_kg_query_ui_chips GoogleDiscoveryEngineSearchEngine#disable_private_kg_query_ui_chips}

---

##### `disablePrivateKgQueryUnderstanding`<sup>Optional</sup> <a name="disablePrivateKgQueryUnderstanding" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgQueryUnderstanding"></a>

```java
public java.lang.Boolean|IResolvable getDisablePrivateKgQueryUnderstanding();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable the private KG query understanding for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#disable_private_kg_query_understanding GoogleDiscoveryEngineSearchEngine#disable_private_kg_query_understanding}

---

### GoogleDiscoveryEngineSearchEngineSearchEngineConfig <a name="GoogleDiscoveryEngineSearchEngineSearchEngineConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_search_engine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig;

GoogleDiscoveryEngineSearchEngineSearchEngineConfig.builder()
//  .requiredSubscriptionTier(java.lang.String)
//  .searchAddOns(java.util.List<java.lang.String>)
//  .searchTier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig.property.requiredSubscriptionTier">requiredSubscriptionTier</a></code> | <code>java.lang.String</code> | The required subscription tier of this engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig.property.searchAddOns">searchAddOns</a></code> | <code>java.util.List<java.lang.String></code> | The add-on that this search engine enables. Possible values: ["SEARCH_ADD_ON_LLM"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig.property.searchTier">searchTier</a></code> | <code>java.lang.String</code> | The search feature tier of this engine. |

---

##### `requiredSubscriptionTier`<sup>Optional</sup> <a name="requiredSubscriptionTier" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig.property.requiredSubscriptionTier"></a>

```java
public java.lang.String getRequiredSubscriptionTier();
```

- *Type:* java.lang.String

The required subscription tier of this engine.

They cannot be modified after engine creation. If the required subscription tier is search, user with higher license tier like assist can still access the standalone app associated with this engine. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_ENTERPRISE_EMERGING", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO", "SUBSCRIPTION_TIER_EDU_EMERGING", "SUBSCRIPTION_TIER_EDU_PRO_EMERGING", "SUBSCRIPTION_TIER_FRONTLINE_STARTER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#required_subscription_tier GoogleDiscoveryEngineSearchEngine#required_subscription_tier}

---

##### `searchAddOns`<sup>Optional</sup> <a name="searchAddOns" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig.property.searchAddOns"></a>

```java
public java.util.List<java.lang.String> getSearchAddOns();
```

- *Type:* java.util.List<java.lang.String>

The add-on that this search engine enables. Possible values: ["SEARCH_ADD_ON_LLM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#search_add_ons GoogleDiscoveryEngineSearchEngine#search_add_ons}

---

##### `searchTier`<sup>Optional</sup> <a name="searchTier" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig.property.searchTier"></a>

```java
public java.lang.String getSearchTier();
```

- *Type:* java.lang.String

The search feature tier of this engine.

Defaults to SearchTier.SEARCH_TIER_STANDARD if not specified. Default value: "SEARCH_TIER_STANDARD" Possible values: ["SEARCH_TIER_STANDARD", "SEARCH_TIER_ENTERPRISE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#search_tier GoogleDiscoveryEngineSearchEngine#search_tier}

---

### GoogleDiscoveryEngineSearchEngineTimeouts <a name="GoogleDiscoveryEngineSearchEngineTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_search_engine.GoogleDiscoveryEngineSearchEngineTimeouts;

GoogleDiscoveryEngineSearchEngineTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#create GoogleDiscoveryEngineSearchEngine#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#delete GoogleDiscoveryEngineSearchEngine#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#update GoogleDiscoveryEngineSearchEngine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#create GoogleDiscoveryEngineSearchEngine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#delete GoogleDiscoveryEngineSearchEngine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_search_engine#update GoogleDiscoveryEngineSearchEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference <a name="GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_search_engine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference;

new GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.resetCompanyName">resetCompanyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompanyName` <a name="resetCompanyName" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.resetCompanyName"></a>

```java
public void resetCompanyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyNameInput">companyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyName">companyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig">GoogleDiscoveryEngineSearchEngineCommonConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `companyNameInput`<sup>Optional</sup> <a name="companyNameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyNameInput"></a>

```java
public java.lang.String getCompanyNameInput();
```

- *Type:* java.lang.String

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineSearchEngineCommonConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig">GoogleDiscoveryEngineSearchEngineCommonConfig</a>

---


### GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference <a name="GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_search_engine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference;

new GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgAutoComplete">resetDisablePrivateKgAutoComplete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgEnrichment">resetDisablePrivateKgEnrichment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgQueryUiChips">resetDisablePrivateKgQueryUiChips</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgQueryUnderstanding">resetDisablePrivateKgQueryUnderstanding</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisablePrivateKgAutoComplete` <a name="resetDisablePrivateKgAutoComplete" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgAutoComplete"></a>

```java
public void resetDisablePrivateKgAutoComplete()
```

##### `resetDisablePrivateKgEnrichment` <a name="resetDisablePrivateKgEnrichment" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgEnrichment"></a>

```java
public void resetDisablePrivateKgEnrichment()
```

##### `resetDisablePrivateKgQueryUiChips` <a name="resetDisablePrivateKgQueryUiChips" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgQueryUiChips"></a>

```java
public void resetDisablePrivateKgQueryUiChips()
```

##### `resetDisablePrivateKgQueryUnderstanding` <a name="resetDisablePrivateKgQueryUnderstanding" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgQueryUnderstanding"></a>

```java
public void resetDisablePrivateKgQueryUnderstanding()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgAutoCompleteInput">disablePrivateKgAutoCompleteInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgEnrichmentInput">disablePrivateKgEnrichmentInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUiChipsInput">disablePrivateKgQueryUiChipsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUnderstandingInput">disablePrivateKgQueryUnderstandingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgAutoComplete">disablePrivateKgAutoComplete</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgEnrichment">disablePrivateKgEnrichment</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUiChips">disablePrivateKgQueryUiChips</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUnderstanding">disablePrivateKgQueryUnderstanding</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disablePrivateKgAutoCompleteInput`<sup>Optional</sup> <a name="disablePrivateKgAutoCompleteInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgAutoCompleteInput"></a>

```java
public java.lang.Boolean|IResolvable getDisablePrivateKgAutoCompleteInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disablePrivateKgEnrichmentInput`<sup>Optional</sup> <a name="disablePrivateKgEnrichmentInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgEnrichmentInput"></a>

```java
public java.lang.Boolean|IResolvable getDisablePrivateKgEnrichmentInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disablePrivateKgQueryUiChipsInput`<sup>Optional</sup> <a name="disablePrivateKgQueryUiChipsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUiChipsInput"></a>

```java
public java.lang.Boolean|IResolvable getDisablePrivateKgQueryUiChipsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disablePrivateKgQueryUnderstandingInput`<sup>Optional</sup> <a name="disablePrivateKgQueryUnderstandingInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUnderstandingInput"></a>

```java
public java.lang.Boolean|IResolvable getDisablePrivateKgQueryUnderstandingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disablePrivateKgAutoComplete`<sup>Required</sup> <a name="disablePrivateKgAutoComplete" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgAutoComplete"></a>

```java
public java.lang.Boolean|IResolvable getDisablePrivateKgAutoComplete();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disablePrivateKgEnrichment`<sup>Required</sup> <a name="disablePrivateKgEnrichment" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgEnrichment"></a>

```java
public java.lang.Boolean|IResolvable getDisablePrivateKgEnrichment();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disablePrivateKgQueryUiChips`<sup>Required</sup> <a name="disablePrivateKgQueryUiChips" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUiChips"></a>

```java
public java.lang.Boolean|IResolvable getDisablePrivateKgQueryUiChips();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disablePrivateKgQueryUnderstanding`<sup>Required</sup> <a name="disablePrivateKgQueryUnderstanding" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUnderstanding"></a>

```java
public java.lang.Boolean|IResolvable getDisablePrivateKgQueryUnderstanding();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a>

---


### GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference <a name="GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_search_engine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference;

new GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.putFeatureConfig">putFeatureConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetCloudKnowledgeGraphTypes">resetCloudKnowledgeGraphTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetEnableCloudKnowledgeGraph">resetEnableCloudKnowledgeGraph</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetEnablePrivateKnowledgeGraph">resetEnablePrivateKnowledgeGraph</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetFeatureConfig">resetFeatureConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFeatureConfig` <a name="putFeatureConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.putFeatureConfig"></a>

```java
public void putFeatureConfig(GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.putFeatureConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a>

---

##### `resetCloudKnowledgeGraphTypes` <a name="resetCloudKnowledgeGraphTypes" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetCloudKnowledgeGraphTypes"></a>

```java
public void resetCloudKnowledgeGraphTypes()
```

##### `resetEnableCloudKnowledgeGraph` <a name="resetEnableCloudKnowledgeGraph" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetEnableCloudKnowledgeGraph"></a>

```java
public void resetEnableCloudKnowledgeGraph()
```

##### `resetEnablePrivateKnowledgeGraph` <a name="resetEnablePrivateKnowledgeGraph" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetEnablePrivateKnowledgeGraph"></a>

```java
public void resetEnablePrivateKnowledgeGraph()
```

##### `resetFeatureConfig` <a name="resetFeatureConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetFeatureConfig"></a>

```java
public void resetFeatureConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.featureConfig">featureConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.cloudKnowledgeGraphTypesInput">cloudKnowledgeGraphTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enableCloudKnowledgeGraphInput">enableCloudKnowledgeGraphInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enablePrivateKnowledgeGraphInput">enablePrivateKnowledgeGraphInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.featureConfigInput">featureConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.cloudKnowledgeGraphTypes">cloudKnowledgeGraphTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enableCloudKnowledgeGraph">enableCloudKnowledgeGraph</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enablePrivateKnowledgeGraph">enablePrivateKnowledgeGraph</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `featureConfig`<sup>Required</sup> <a name="featureConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.featureConfig"></a>

```java
public GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference getFeatureConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference</a>

---

##### `cloudKnowledgeGraphTypesInput`<sup>Optional</sup> <a name="cloudKnowledgeGraphTypesInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.cloudKnowledgeGraphTypesInput"></a>

```java
public java.util.List<java.lang.String> getCloudKnowledgeGraphTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableCloudKnowledgeGraphInput`<sup>Optional</sup> <a name="enableCloudKnowledgeGraphInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enableCloudKnowledgeGraphInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableCloudKnowledgeGraphInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enablePrivateKnowledgeGraphInput`<sup>Optional</sup> <a name="enablePrivateKnowledgeGraphInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enablePrivateKnowledgeGraphInput"></a>

```java
public java.lang.Boolean|IResolvable getEnablePrivateKnowledgeGraphInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `featureConfigInput`<sup>Optional</sup> <a name="featureConfigInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.featureConfigInput"></a>

```java
public GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig getFeatureConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a>

---

##### `cloudKnowledgeGraphTypes`<sup>Required</sup> <a name="cloudKnowledgeGraphTypes" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.cloudKnowledgeGraphTypes"></a>

```java
public java.util.List<java.lang.String> getCloudKnowledgeGraphTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableCloudKnowledgeGraph`<sup>Required</sup> <a name="enableCloudKnowledgeGraph" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enableCloudKnowledgeGraph"></a>

```java
public java.lang.Boolean|IResolvable getEnableCloudKnowledgeGraph();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enablePrivateKnowledgeGraph`<sup>Required</sup> <a name="enablePrivateKnowledgeGraph" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enablePrivateKnowledgeGraph"></a>

```java
public java.lang.Boolean|IResolvable getEnablePrivateKnowledgeGraph();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig</a>

---


### GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference <a name="GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_search_engine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference;

new GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetRequiredSubscriptionTier">resetRequiredSubscriptionTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchAddOns">resetSearchAddOns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchTier">resetSearchTier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRequiredSubscriptionTier` <a name="resetRequiredSubscriptionTier" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetRequiredSubscriptionTier"></a>

```java
public void resetRequiredSubscriptionTier()
```

##### `resetSearchAddOns` <a name="resetSearchAddOns" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchAddOns"></a>

```java
public void resetSearchAddOns()
```

##### `resetSearchTier` <a name="resetSearchTier" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchTier"></a>

```java
public void resetSearchTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.requiredSubscriptionTierInput">requiredSubscriptionTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOnsInput">searchAddOnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTierInput">searchTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.requiredSubscriptionTier">requiredSubscriptionTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOns">searchAddOns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTier">searchTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig">GoogleDiscoveryEngineSearchEngineSearchEngineConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `requiredSubscriptionTierInput`<sup>Optional</sup> <a name="requiredSubscriptionTierInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.requiredSubscriptionTierInput"></a>

```java
public java.lang.String getRequiredSubscriptionTierInput();
```

- *Type:* java.lang.String

---

##### `searchAddOnsInput`<sup>Optional</sup> <a name="searchAddOnsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOnsInput"></a>

```java
public java.util.List<java.lang.String> getSearchAddOnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `searchTierInput`<sup>Optional</sup> <a name="searchTierInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTierInput"></a>

```java
public java.lang.String getSearchTierInput();
```

- *Type:* java.lang.String

---

##### `requiredSubscriptionTier`<sup>Required</sup> <a name="requiredSubscriptionTier" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.requiredSubscriptionTier"></a>

```java
public java.lang.String getRequiredSubscriptionTier();
```

- *Type:* java.lang.String

---

##### `searchAddOns`<sup>Required</sup> <a name="searchAddOns" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOns"></a>

```java
public java.util.List<java.lang.String> getSearchAddOns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `searchTier`<sup>Required</sup> <a name="searchTier" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTier"></a>

```java
public java.lang.String getSearchTier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineSearchEngineSearchEngineConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig">GoogleDiscoveryEngineSearchEngineSearchEngineConfig</a>

---


### GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference <a name="GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_search_engine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference;

new GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts">GoogleDiscoveryEngineSearchEngineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDiscoveryEngineSearchEngineTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts">GoogleDiscoveryEngineSearchEngineTimeouts</a>

---



