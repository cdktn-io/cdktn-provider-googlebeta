# `googleDiscoveryEngineSearchEngine` Submodule <a name="`googleDiscoveryEngineSearchEngine` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineSearchEngine <a name="GoogleDiscoveryEngineSearchEngine" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine google_discovery_engine_search_engine}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_search_engine

googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  collection_id: str,
  data_store_ids: typing.List[str],
  display_name: str,
  engine_id: str,
  location: str,
  search_engine_config: GoogleDiscoveryEngineSearchEngineSearchEngineConfig,
  app_type: str = None,
  common_config: GoogleDiscoveryEngineSearchEngineCommonConfig = None,
  deletion_policy: str = None,
  disable_analytics: bool | IResolvable = None,
  features: typing.Mapping[str] = None,
  id: str = None,
  industry_vertical: str = None,
  kms_key_name: str = None,
  knowledge_graph_config: GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig = None,
  project: str = None,
  timeouts: GoogleDiscoveryEngineSearchEngineTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.collectionId">collection_id</a></code> | <code>str</code> | The collection ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.dataStoreIds">data_store_ids</a></code> | <code>typing.List[str]</code> | The data stores associated with this engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.engineId">engine_id</a></code> | <code>str</code> | Unique ID to use for Search Engine App. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.location">location</a></code> | <code>str</code> | Location. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.searchEngineConfig">search_engine_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig">GoogleDiscoveryEngineSearchEngineSearchEngineConfig</a></code> | search_engine_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.appType">app_type</a></code> | <code>str</code> | This is the application type this engine resource represents. The supported values: 'APP_TYPE_UNSPECIFIED', 'APP_TYPE_INTRANET'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.commonConfig">common_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig">GoogleDiscoveryEngineSearchEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.disableAnalytics">disable_analytics</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to disable analytics for searches performed on this engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.features">features</a></code> | <code>typing.Mapping[str]</code> | A map of the feature config for the engine to opt in or opt out of features. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#id GoogleDiscoveryEngineSearchEngine#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.industryVertical">industry_vertical</a></code> | <code>str</code> | The industry vertical that the engine registers. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The KMS key to be used to protect this Engine at creation time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.knowledgeGraphConfig">knowledge_graph_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig</a></code> | knowledge_graph_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#project GoogleDiscoveryEngineSearchEngine#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts">GoogleDiscoveryEngineSearchEngineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.collectionId"></a>

- *Type:* str

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#collection_id GoogleDiscoveryEngineSearchEngine#collection_id}

---

##### `data_store_ids`<sup>Required</sup> <a name="data_store_ids" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.dataStoreIds"></a>

- *Type:* typing.List[str]

The data stores associated with this engine.

For SOLUTION_TYPE_SEARCH type of engines, they can only associate with at most one data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#data_store_ids GoogleDiscoveryEngineSearchEngine#data_store_ids}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.displayName"></a>

- *Type:* str

Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#display_name GoogleDiscoveryEngineSearchEngine#display_name}

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.engineId"></a>

- *Type:* str

Unique ID to use for Search Engine App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#engine_id GoogleDiscoveryEngineSearchEngine#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.location"></a>

- *Type:* str

Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#location GoogleDiscoveryEngineSearchEngine#location}

---

##### `search_engine_config`<sup>Required</sup> <a name="search_engine_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.searchEngineConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig">GoogleDiscoveryEngineSearchEngineSearchEngineConfig</a>

search_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#search_engine_config GoogleDiscoveryEngineSearchEngine#search_engine_config}

---

##### `app_type`<sup>Optional</sup> <a name="app_type" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.appType"></a>

- *Type:* str

This is the application type this engine resource represents. The supported values: 'APP_TYPE_UNSPECIFIED', 'APP_TYPE_INTRANET'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#app_type GoogleDiscoveryEngineSearchEngine#app_type}

---

##### `common_config`<sup>Optional</sup> <a name="common_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.commonConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig">GoogleDiscoveryEngineSearchEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#common_config GoogleDiscoveryEngineSearchEngine#common_config}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#deletion_policy GoogleDiscoveryEngineSearchEngine#deletion_policy}

---

##### `disable_analytics`<sup>Optional</sup> <a name="disable_analytics" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.disableAnalytics"></a>

- *Type:* bool | cdktn.IResolvable

Whether to disable analytics for searches performed on this engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#disable_analytics GoogleDiscoveryEngineSearchEngine#disable_analytics}

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.features"></a>

- *Type:* typing.Mapping[str]

A map of the feature config for the engine to opt in or opt out of features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#features GoogleDiscoveryEngineSearchEngine#features}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#id GoogleDiscoveryEngineSearchEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `industry_vertical`<sup>Optional</sup> <a name="industry_vertical" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.industryVertical"></a>

- *Type:* str

The industry vertical that the engine registers.

The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine. Default value: "GENERIC" Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#industry_vertical GoogleDiscoveryEngineSearchEngine#industry_vertical}

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.kmsKeyName"></a>

- *Type:* str

The KMS key to be used to protect this Engine at creation time.

Must be set for requests that need to comply with CMEK Org Policy
protections.

If this field is set and processed successfully, the Engine will be
protected by the KMS key, as indicated in the cmek_config field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#kms_key_name GoogleDiscoveryEngineSearchEngine#kms_key_name}

---

##### `knowledge_graph_config`<sup>Optional</sup> <a name="knowledge_graph_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.knowledgeGraphConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig</a>

knowledge_graph_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#knowledge_graph_config GoogleDiscoveryEngineSearchEngine#knowledge_graph_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#project GoogleDiscoveryEngineSearchEngine#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts">GoogleDiscoveryEngineSearchEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#timeouts GoogleDiscoveryEngineSearchEngine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putCommonConfig">put_common_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putKnowledgeGraphConfig">put_knowledge_graph_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putSearchEngineConfig">put_search_engine_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetAppType">reset_app_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetCommonConfig">reset_common_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetDisableAnalytics">reset_disable_analytics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetFeatures">reset_features</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetIndustryVertical">reset_industry_vertical</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetKnowledgeGraphConfig">reset_knowledge_graph_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_common_config` <a name="put_common_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putCommonConfig"></a>

```python
def put_common_config(
  company_name: str = None
) -> None
```

###### `company_name`<sup>Optional</sup> <a name="company_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putCommonConfig.parameter.companyName"></a>

- *Type:* str

The name of the company, business or entity that is associated with the engine.

Setting this may help improve LLM related features.cd

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#company_name GoogleDiscoveryEngineSearchEngine#company_name}

---

##### `put_knowledge_graph_config` <a name="put_knowledge_graph_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putKnowledgeGraphConfig"></a>

```python
def put_knowledge_graph_config(
  cloud_knowledge_graph_types: typing.List[str] = None,
  enable_cloud_knowledge_graph: bool | IResolvable = None,
  enable_private_knowledge_graph: bool | IResolvable = None,
  feature_config: GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig = None
) -> None
```

###### `cloud_knowledge_graph_types`<sup>Optional</sup> <a name="cloud_knowledge_graph_types" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putKnowledgeGraphConfig.parameter.cloudKnowledgeGraphTypes"></a>

- *Type:* typing.List[str]

Specify entity types to support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#cloud_knowledge_graph_types GoogleDiscoveryEngineSearchEngine#cloud_knowledge_graph_types}

---

###### `enable_cloud_knowledge_graph`<sup>Optional</sup> <a name="enable_cloud_knowledge_graph" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putKnowledgeGraphConfig.parameter.enableCloudKnowledgeGraph"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable the Cloud Knowledge Graph for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#enable_cloud_knowledge_graph GoogleDiscoveryEngineSearchEngine#enable_cloud_knowledge_graph}

---

###### `enable_private_knowledge_graph`<sup>Optional</sup> <a name="enable_private_knowledge_graph" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putKnowledgeGraphConfig.parameter.enablePrivateKnowledgeGraph"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable the Private Knowledge Graph for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#enable_private_knowledge_graph GoogleDiscoveryEngineSearchEngine#enable_private_knowledge_graph}

---

###### `feature_config`<sup>Optional</sup> <a name="feature_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putKnowledgeGraphConfig.parameter.featureConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a>

feature_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#feature_config GoogleDiscoveryEngineSearchEngine#feature_config}

---

##### `put_search_engine_config` <a name="put_search_engine_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putSearchEngineConfig"></a>

```python
def put_search_engine_config(
  required_subscription_tier: str = None,
  search_add_ons: typing.List[str] = None,
  search_tier: str = None
) -> None
```

###### `required_subscription_tier`<sup>Optional</sup> <a name="required_subscription_tier" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putSearchEngineConfig.parameter.requiredSubscriptionTier"></a>

- *Type:* str

The required subscription tier of this engine.

They cannot be modified after engine creation. If the required subscription tier is search, user with higher license tier like assist can still access the standalone app associated with this engine. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_ENTERPRISE_EMERGING", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO", "SUBSCRIPTION_TIER_EDU_EMERGING", "SUBSCRIPTION_TIER_EDU_PRO_EMERGING", "SUBSCRIPTION_TIER_FRONTLINE_STARTER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#required_subscription_tier GoogleDiscoveryEngineSearchEngine#required_subscription_tier}

---

###### `search_add_ons`<sup>Optional</sup> <a name="search_add_ons" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putSearchEngineConfig.parameter.searchAddOns"></a>

- *Type:* typing.List[str]

The add-on that this search engine enables. Possible values: ["SEARCH_ADD_ON_LLM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#search_add_ons GoogleDiscoveryEngineSearchEngine#search_add_ons}

---

###### `search_tier`<sup>Optional</sup> <a name="search_tier" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putSearchEngineConfig.parameter.searchTier"></a>

- *Type:* str

The search feature tier of this engine.

Defaults to SearchTier.SEARCH_TIER_STANDARD if not specified. Default value: "SEARCH_TIER_STANDARD" Possible values: ["SEARCH_TIER_STANDARD", "SEARCH_TIER_ENTERPRISE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#search_tier GoogleDiscoveryEngineSearchEngine#search_tier}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#create GoogleDiscoveryEngineSearchEngine#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#delete GoogleDiscoveryEngineSearchEngine#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#update GoogleDiscoveryEngineSearchEngine#update}.

---

##### `reset_app_type` <a name="reset_app_type" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetAppType"></a>

```python
def reset_app_type() -> None
```

##### `reset_common_config` <a name="reset_common_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetCommonConfig"></a>

```python
def reset_common_config() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_disable_analytics` <a name="reset_disable_analytics" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetDisableAnalytics"></a>

```python
def reset_disable_analytics() -> None
```

##### `reset_features` <a name="reset_features" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetFeatures"></a>

```python
def reset_features() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_industry_vertical` <a name="reset_industry_vertical" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetIndustryVertical"></a>

```python
def reset_industry_vertical() -> None
```

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```

##### `reset_knowledge_graph_config` <a name="reset_knowledge_graph_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetKnowledgeGraphConfig"></a>

```python
def reset_knowledge_graph_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineSearchEngine resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_search_engine

googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_search_engine

googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_search_engine

googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_search_engine

googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleDiscoveryEngineSearchEngine resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDiscoveryEngineSearchEngine to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDiscoveryEngineSearchEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineSearchEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.commonConfig">common_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference">GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.knowledgeGraphConfig">knowledge_graph_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.searchEngineConfig">search_engine_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference">GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference">GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.appTypeInput">app_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.collectionIdInput">collection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.commonConfigInput">common_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig">GoogleDiscoveryEngineSearchEngineCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.dataStoreIdsInput">data_store_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.disableAnalyticsInput">disable_analytics_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.engineIdInput">engine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.featuresInput">features_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.industryVerticalInput">industry_vertical_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.knowledgeGraphConfigInput">knowledge_graph_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.searchEngineConfigInput">search_engine_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig">GoogleDiscoveryEngineSearchEngineSearchEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts">GoogleDiscoveryEngineSearchEngineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.appType">app_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.collectionId">collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.dataStoreIds">data_store_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.disableAnalytics">disable_analytics</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.engineId">engine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.features">features</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.industryVertical">industry_vertical</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `common_config`<sup>Required</sup> <a name="common_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.commonConfig"></a>

```python
common_config: GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference">GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `knowledge_graph_config`<sup>Required</sup> <a name="knowledge_graph_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.knowledgeGraphConfig"></a>

```python
knowledge_graph_config: GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `search_engine_config`<sup>Required</sup> <a name="search_engine_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.searchEngineConfig"></a>

```python
search_engine_config: GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference">GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.timeouts"></a>

```python
timeouts: GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference">GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `app_type_input`<sup>Optional</sup> <a name="app_type_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.appTypeInput"></a>

```python
app_type_input: str
```

- *Type:* str

---

##### `collection_id_input`<sup>Optional</sup> <a name="collection_id_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.collectionIdInput"></a>

```python
collection_id_input: str
```

- *Type:* str

---

##### `common_config_input`<sup>Optional</sup> <a name="common_config_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.commonConfigInput"></a>

```python
common_config_input: GoogleDiscoveryEngineSearchEngineCommonConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig">GoogleDiscoveryEngineSearchEngineCommonConfig</a>

---

##### `data_store_ids_input`<sup>Optional</sup> <a name="data_store_ids_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.dataStoreIdsInput"></a>

```python
data_store_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `disable_analytics_input`<sup>Optional</sup> <a name="disable_analytics_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.disableAnalyticsInput"></a>

```python
disable_analytics_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `engine_id_input`<sup>Optional</sup> <a name="engine_id_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.engineIdInput"></a>

```python
engine_id_input: str
```

- *Type:* str

---

##### `features_input`<sup>Optional</sup> <a name="features_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.featuresInput"></a>

```python
features_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `industry_vertical_input`<sup>Optional</sup> <a name="industry_vertical_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.industryVerticalInput"></a>

```python
industry_vertical_input: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `knowledge_graph_config_input`<sup>Optional</sup> <a name="knowledge_graph_config_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.knowledgeGraphConfigInput"></a>

```python
knowledge_graph_config_input: GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `search_engine_config_input`<sup>Optional</sup> <a name="search_engine_config_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.searchEngineConfigInput"></a>

```python
search_engine_config_input: GoogleDiscoveryEngineSearchEngineSearchEngineConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig">GoogleDiscoveryEngineSearchEngineSearchEngineConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleDiscoveryEngineSearchEngineTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts">GoogleDiscoveryEngineSearchEngineTimeouts</a>

---

##### `app_type`<sup>Required</sup> <a name="app_type" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.appType"></a>

```python
app_type: str
```

- *Type:* str

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

---

##### `data_store_ids`<sup>Required</sup> <a name="data_store_ids" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.dataStoreIds"></a>

```python
data_store_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `disable_analytics`<sup>Required</sup> <a name="disable_analytics" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.disableAnalytics"></a>

```python
disable_analytics: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.engineId"></a>

```python
engine_id: str
```

- *Type:* str

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.features"></a>

```python
features: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `industry_vertical`<sup>Required</sup> <a name="industry_vertical" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.industryVertical"></a>

```python
industry_vertical: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngine.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineSearchEngineCommonConfig <a name="GoogleDiscoveryEngineSearchEngineCommonConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_search_engine

googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig(
  company_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig.property.companyName">company_name</a></code> | <code>str</code> | The name of the company, business or entity that is associated with the engine. |

---

##### `company_name`<sup>Optional</sup> <a name="company_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

The name of the company, business or entity that is associated with the engine.

Setting this may help improve LLM related features.cd

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#company_name GoogleDiscoveryEngineSearchEngine#company_name}

---

### GoogleDiscoveryEngineSearchEngineConfig <a name="GoogleDiscoveryEngineSearchEngineConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_search_engine

googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  collection_id: str,
  data_store_ids: typing.List[str],
  display_name: str,
  engine_id: str,
  location: str,
  search_engine_config: GoogleDiscoveryEngineSearchEngineSearchEngineConfig,
  app_type: str = None,
  common_config: GoogleDiscoveryEngineSearchEngineCommonConfig = None,
  deletion_policy: str = None,
  disable_analytics: bool | IResolvable = None,
  features: typing.Mapping[str] = None,
  id: str = None,
  industry_vertical: str = None,
  kms_key_name: str = None,
  knowledge_graph_config: GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig = None,
  project: str = None,
  timeouts: GoogleDiscoveryEngineSearchEngineTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.collectionId">collection_id</a></code> | <code>str</code> | The collection ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.dataStoreIds">data_store_ids</a></code> | <code>typing.List[str]</code> | The data stores associated with this engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.displayName">display_name</a></code> | <code>str</code> | Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.engineId">engine_id</a></code> | <code>str</code> | Unique ID to use for Search Engine App. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.location">location</a></code> | <code>str</code> | Location. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.searchEngineConfig">search_engine_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig">GoogleDiscoveryEngineSearchEngineSearchEngineConfig</a></code> | search_engine_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.appType">app_type</a></code> | <code>str</code> | This is the application type this engine resource represents. The supported values: 'APP_TYPE_UNSPECIFIED', 'APP_TYPE_INTRANET'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.commonConfig">common_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig">GoogleDiscoveryEngineSearchEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.disableAnalytics">disable_analytics</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to disable analytics for searches performed on this engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.features">features</a></code> | <code>typing.Mapping[str]</code> | A map of the feature config for the engine to opt in or opt out of features. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#id GoogleDiscoveryEngineSearchEngine#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.industryVertical">industry_vertical</a></code> | <code>str</code> | The industry vertical that the engine registers. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The KMS key to be used to protect this Engine at creation time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.knowledgeGraphConfig">knowledge_graph_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig</a></code> | knowledge_graph_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#project GoogleDiscoveryEngineSearchEngine#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts">GoogleDiscoveryEngineSearchEngineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#collection_id GoogleDiscoveryEngineSearchEngine#collection_id}

---

##### `data_store_ids`<sup>Required</sup> <a name="data_store_ids" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.dataStoreIds"></a>

```python
data_store_ids: typing.List[str]
```

- *Type:* typing.List[str]

The data stores associated with this engine.

For SOLUTION_TYPE_SEARCH type of engines, they can only associate with at most one data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#data_store_ids GoogleDiscoveryEngineSearchEngine#data_store_ids}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#display_name GoogleDiscoveryEngineSearchEngine#display_name}

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.engineId"></a>

```python
engine_id: str
```

- *Type:* str

Unique ID to use for Search Engine App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#engine_id GoogleDiscoveryEngineSearchEngine#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#location GoogleDiscoveryEngineSearchEngine#location}

---

##### `search_engine_config`<sup>Required</sup> <a name="search_engine_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.searchEngineConfig"></a>

```python
search_engine_config: GoogleDiscoveryEngineSearchEngineSearchEngineConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig">GoogleDiscoveryEngineSearchEngineSearchEngineConfig</a>

search_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#search_engine_config GoogleDiscoveryEngineSearchEngine#search_engine_config}

---

##### `app_type`<sup>Optional</sup> <a name="app_type" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.appType"></a>

```python
app_type: str
```

- *Type:* str

This is the application type this engine resource represents. The supported values: 'APP_TYPE_UNSPECIFIED', 'APP_TYPE_INTRANET'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#app_type GoogleDiscoveryEngineSearchEngine#app_type}

---

##### `common_config`<sup>Optional</sup> <a name="common_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.commonConfig"></a>

```python
common_config: GoogleDiscoveryEngineSearchEngineCommonConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig">GoogleDiscoveryEngineSearchEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#common_config GoogleDiscoveryEngineSearchEngine#common_config}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#deletion_policy GoogleDiscoveryEngineSearchEngine#deletion_policy}

---

##### `disable_analytics`<sup>Optional</sup> <a name="disable_analytics" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.disableAnalytics"></a>

```python
disable_analytics: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to disable analytics for searches performed on this engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#disable_analytics GoogleDiscoveryEngineSearchEngine#disable_analytics}

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.features"></a>

```python
features: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of the feature config for the engine to opt in or opt out of features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#features GoogleDiscoveryEngineSearchEngine#features}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#id GoogleDiscoveryEngineSearchEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `industry_vertical`<sup>Optional</sup> <a name="industry_vertical" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.industryVertical"></a>

```python
industry_vertical: str
```

- *Type:* str

The industry vertical that the engine registers.

The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine. Default value: "GENERIC" Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#industry_vertical GoogleDiscoveryEngineSearchEngine#industry_vertical}

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The KMS key to be used to protect this Engine at creation time.

Must be set for requests that need to comply with CMEK Org Policy
protections.

If this field is set and processed successfully, the Engine will be
protected by the KMS key, as indicated in the cmek_config field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#kms_key_name GoogleDiscoveryEngineSearchEngine#kms_key_name}

---

##### `knowledge_graph_config`<sup>Optional</sup> <a name="knowledge_graph_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.knowledgeGraphConfig"></a>

```python
knowledge_graph_config: GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig</a>

knowledge_graph_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#knowledge_graph_config GoogleDiscoveryEngineSearchEngine#knowledge_graph_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#project GoogleDiscoveryEngineSearchEngine#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineConfig.property.timeouts"></a>

```python
timeouts: GoogleDiscoveryEngineSearchEngineTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts">GoogleDiscoveryEngineSearchEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#timeouts GoogleDiscoveryEngineSearchEngine#timeouts}

---

### GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig <a name="GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_search_engine

googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig(
  cloud_knowledge_graph_types: typing.List[str] = None,
  enable_cloud_knowledge_graph: bool | IResolvable = None,
  enable_private_knowledge_graph: bool | IResolvable = None,
  feature_config: GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.property.cloudKnowledgeGraphTypes">cloud_knowledge_graph_types</a></code> | <code>typing.List[str]</code> | Specify entity types to support. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.property.enableCloudKnowledgeGraph">enable_cloud_knowledge_graph</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable the Cloud Knowledge Graph for the engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.property.enablePrivateKnowledgeGraph">enable_private_knowledge_graph</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable the Private Knowledge Graph for the engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.property.featureConfig">feature_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a></code> | feature_config block. |

---

##### `cloud_knowledge_graph_types`<sup>Optional</sup> <a name="cloud_knowledge_graph_types" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.property.cloudKnowledgeGraphTypes"></a>

```python
cloud_knowledge_graph_types: typing.List[str]
```

- *Type:* typing.List[str]

Specify entity types to support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#cloud_knowledge_graph_types GoogleDiscoveryEngineSearchEngine#cloud_knowledge_graph_types}

---

##### `enable_cloud_knowledge_graph`<sup>Optional</sup> <a name="enable_cloud_knowledge_graph" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.property.enableCloudKnowledgeGraph"></a>

```python
enable_cloud_knowledge_graph: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable the Cloud Knowledge Graph for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#enable_cloud_knowledge_graph GoogleDiscoveryEngineSearchEngine#enable_cloud_knowledge_graph}

---

##### `enable_private_knowledge_graph`<sup>Optional</sup> <a name="enable_private_knowledge_graph" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.property.enablePrivateKnowledgeGraph"></a>

```python
enable_private_knowledge_graph: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable the Private Knowledge Graph for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#enable_private_knowledge_graph GoogleDiscoveryEngineSearchEngine#enable_private_knowledge_graph}

---

##### `feature_config`<sup>Optional</sup> <a name="feature_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig.property.featureConfig"></a>

```python
feature_config: GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a>

feature_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#feature_config GoogleDiscoveryEngineSearchEngine#feature_config}

---

### GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig <a name="GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_search_engine

googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig(
  disable_private_kg_auto_complete: bool | IResolvable = None,
  disable_private_kg_enrichment: bool | IResolvable = None,
  disable_private_kg_query_ui_chips: bool | IResolvable = None,
  disable_private_kg_query_understanding: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgAutoComplete">disable_private_kg_auto_complete</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to disable the private KG auto complete for the engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgEnrichment">disable_private_kg_enrichment</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to disable the private KG enrichment for the engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgQueryUiChips">disable_private_kg_query_ui_chips</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to disable the private KG for query UI chips. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgQueryUnderstanding">disable_private_kg_query_understanding</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to disable the private KG query understanding for the engine. |

---

##### `disable_private_kg_auto_complete`<sup>Optional</sup> <a name="disable_private_kg_auto_complete" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgAutoComplete"></a>

```python
disable_private_kg_auto_complete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to disable the private KG auto complete for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#disable_private_kg_auto_complete GoogleDiscoveryEngineSearchEngine#disable_private_kg_auto_complete}

---

##### `disable_private_kg_enrichment`<sup>Optional</sup> <a name="disable_private_kg_enrichment" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgEnrichment"></a>

```python
disable_private_kg_enrichment: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to disable the private KG enrichment for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#disable_private_kg_enrichment GoogleDiscoveryEngineSearchEngine#disable_private_kg_enrichment}

---

##### `disable_private_kg_query_ui_chips`<sup>Optional</sup> <a name="disable_private_kg_query_ui_chips" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgQueryUiChips"></a>

```python
disable_private_kg_query_ui_chips: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to disable the private KG for query UI chips.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#disable_private_kg_query_ui_chips GoogleDiscoveryEngineSearchEngine#disable_private_kg_query_ui_chips}

---

##### `disable_private_kg_query_understanding`<sup>Optional</sup> <a name="disable_private_kg_query_understanding" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig.property.disablePrivateKgQueryUnderstanding"></a>

```python
disable_private_kg_query_understanding: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to disable the private KG query understanding for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#disable_private_kg_query_understanding GoogleDiscoveryEngineSearchEngine#disable_private_kg_query_understanding}

---

### GoogleDiscoveryEngineSearchEngineSearchEngineConfig <a name="GoogleDiscoveryEngineSearchEngineSearchEngineConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_search_engine

googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig(
  required_subscription_tier: str = None,
  search_add_ons: typing.List[str] = None,
  search_tier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig.property.requiredSubscriptionTier">required_subscription_tier</a></code> | <code>str</code> | The required subscription tier of this engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig.property.searchAddOns">search_add_ons</a></code> | <code>typing.List[str]</code> | The add-on that this search engine enables. Possible values: ["SEARCH_ADD_ON_LLM"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig.property.searchTier">search_tier</a></code> | <code>str</code> | The search feature tier of this engine. |

---

##### `required_subscription_tier`<sup>Optional</sup> <a name="required_subscription_tier" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig.property.requiredSubscriptionTier"></a>

```python
required_subscription_tier: str
```

- *Type:* str

The required subscription tier of this engine.

They cannot be modified after engine creation. If the required subscription tier is search, user with higher license tier like assist can still access the standalone app associated with this engine. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_ENTERPRISE_EMERGING", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO", "SUBSCRIPTION_TIER_EDU_EMERGING", "SUBSCRIPTION_TIER_EDU_PRO_EMERGING", "SUBSCRIPTION_TIER_FRONTLINE_STARTER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#required_subscription_tier GoogleDiscoveryEngineSearchEngine#required_subscription_tier}

---

##### `search_add_ons`<sup>Optional</sup> <a name="search_add_ons" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig.property.searchAddOns"></a>

```python
search_add_ons: typing.List[str]
```

- *Type:* typing.List[str]

The add-on that this search engine enables. Possible values: ["SEARCH_ADD_ON_LLM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#search_add_ons GoogleDiscoveryEngineSearchEngine#search_add_ons}

---

##### `search_tier`<sup>Optional</sup> <a name="search_tier" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig.property.searchTier"></a>

```python
search_tier: str
```

- *Type:* str

The search feature tier of this engine.

Defaults to SearchTier.SEARCH_TIER_STANDARD if not specified. Default value: "SEARCH_TIER_STANDARD" Possible values: ["SEARCH_TIER_STANDARD", "SEARCH_TIER_ENTERPRISE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#search_tier GoogleDiscoveryEngineSearchEngine#search_tier}

---

### GoogleDiscoveryEngineSearchEngineTimeouts <a name="GoogleDiscoveryEngineSearchEngineTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_search_engine

googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#create GoogleDiscoveryEngineSearchEngine#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#delete GoogleDiscoveryEngineSearchEngine#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#update GoogleDiscoveryEngineSearchEngine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#create GoogleDiscoveryEngineSearchEngine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#delete GoogleDiscoveryEngineSearchEngine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#update GoogleDiscoveryEngineSearchEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference <a name="GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_search_engine

googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.resetCompanyName">reset_company_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_company_name` <a name="reset_company_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.resetCompanyName"></a>

```python
def reset_company_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyNameInput">company_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyName">company_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig">GoogleDiscoveryEngineSearchEngineCommonConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `company_name_input`<sup>Optional</sup> <a name="company_name_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyNameInput"></a>

```python
company_name_input: str
```

- *Type:* str

---

##### `company_name`<sup>Required</sup> <a name="company_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineSearchEngineCommonConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineCommonConfig">GoogleDiscoveryEngineSearchEngineCommonConfig</a>

---


### GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference <a name="GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_search_engine

googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgAutoComplete">reset_disable_private_kg_auto_complete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgEnrichment">reset_disable_private_kg_enrichment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgQueryUiChips">reset_disable_private_kg_query_ui_chips</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgQueryUnderstanding">reset_disable_private_kg_query_understanding</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disable_private_kg_auto_complete` <a name="reset_disable_private_kg_auto_complete" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgAutoComplete"></a>

```python
def reset_disable_private_kg_auto_complete() -> None
```

##### `reset_disable_private_kg_enrichment` <a name="reset_disable_private_kg_enrichment" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgEnrichment"></a>

```python
def reset_disable_private_kg_enrichment() -> None
```

##### `reset_disable_private_kg_query_ui_chips` <a name="reset_disable_private_kg_query_ui_chips" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgQueryUiChips"></a>

```python
def reset_disable_private_kg_query_ui_chips() -> None
```

##### `reset_disable_private_kg_query_understanding` <a name="reset_disable_private_kg_query_understanding" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.resetDisablePrivateKgQueryUnderstanding"></a>

```python
def reset_disable_private_kg_query_understanding() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgAutoCompleteInput">disable_private_kg_auto_complete_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgEnrichmentInput">disable_private_kg_enrichment_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUiChipsInput">disable_private_kg_query_ui_chips_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUnderstandingInput">disable_private_kg_query_understanding_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgAutoComplete">disable_private_kg_auto_complete</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgEnrichment">disable_private_kg_enrichment</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUiChips">disable_private_kg_query_ui_chips</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUnderstanding">disable_private_kg_query_understanding</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_private_kg_auto_complete_input`<sup>Optional</sup> <a name="disable_private_kg_auto_complete_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgAutoCompleteInput"></a>

```python
disable_private_kg_auto_complete_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_private_kg_enrichment_input`<sup>Optional</sup> <a name="disable_private_kg_enrichment_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgEnrichmentInput"></a>

```python
disable_private_kg_enrichment_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_private_kg_query_ui_chips_input`<sup>Optional</sup> <a name="disable_private_kg_query_ui_chips_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUiChipsInput"></a>

```python
disable_private_kg_query_ui_chips_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_private_kg_query_understanding_input`<sup>Optional</sup> <a name="disable_private_kg_query_understanding_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUnderstandingInput"></a>

```python
disable_private_kg_query_understanding_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_private_kg_auto_complete`<sup>Required</sup> <a name="disable_private_kg_auto_complete" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgAutoComplete"></a>

```python
disable_private_kg_auto_complete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_private_kg_enrichment`<sup>Required</sup> <a name="disable_private_kg_enrichment" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgEnrichment"></a>

```python
disable_private_kg_enrichment: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_private_kg_query_ui_chips`<sup>Required</sup> <a name="disable_private_kg_query_ui_chips" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUiChips"></a>

```python
disable_private_kg_query_ui_chips: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_private_kg_query_understanding`<sup>Required</sup> <a name="disable_private_kg_query_understanding" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.disablePrivateKgQueryUnderstanding"></a>

```python
disable_private_kg_query_understanding: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a>

---


### GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference <a name="GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_search_engine

googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.putFeatureConfig">put_feature_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetCloudKnowledgeGraphTypes">reset_cloud_knowledge_graph_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetEnableCloudKnowledgeGraph">reset_enable_cloud_knowledge_graph</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetEnablePrivateKnowledgeGraph">reset_enable_private_knowledge_graph</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetFeatureConfig">reset_feature_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_feature_config` <a name="put_feature_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.putFeatureConfig"></a>

```python
def put_feature_config(
  disable_private_kg_auto_complete: bool | IResolvable = None,
  disable_private_kg_enrichment: bool | IResolvable = None,
  disable_private_kg_query_ui_chips: bool | IResolvable = None,
  disable_private_kg_query_understanding: bool | IResolvable = None
) -> None
```

###### `disable_private_kg_auto_complete`<sup>Optional</sup> <a name="disable_private_kg_auto_complete" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.putFeatureConfig.parameter.disablePrivateKgAutoComplete"></a>

- *Type:* bool | cdktn.IResolvable

Whether to disable the private KG auto complete for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#disable_private_kg_auto_complete GoogleDiscoveryEngineSearchEngine#disable_private_kg_auto_complete}

---

###### `disable_private_kg_enrichment`<sup>Optional</sup> <a name="disable_private_kg_enrichment" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.putFeatureConfig.parameter.disablePrivateKgEnrichment"></a>

- *Type:* bool | cdktn.IResolvable

Whether to disable the private KG enrichment for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#disable_private_kg_enrichment GoogleDiscoveryEngineSearchEngine#disable_private_kg_enrichment}

---

###### `disable_private_kg_query_ui_chips`<sup>Optional</sup> <a name="disable_private_kg_query_ui_chips" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.putFeatureConfig.parameter.disablePrivateKgQueryUiChips"></a>

- *Type:* bool | cdktn.IResolvable

Whether to disable the private KG for query UI chips.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#disable_private_kg_query_ui_chips GoogleDiscoveryEngineSearchEngine#disable_private_kg_query_ui_chips}

---

###### `disable_private_kg_query_understanding`<sup>Optional</sup> <a name="disable_private_kg_query_understanding" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.putFeatureConfig.parameter.disablePrivateKgQueryUnderstanding"></a>

- *Type:* bool | cdktn.IResolvable

Whether to disable the private KG query understanding for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_search_engine#disable_private_kg_query_understanding GoogleDiscoveryEngineSearchEngine#disable_private_kg_query_understanding}

---

##### `reset_cloud_knowledge_graph_types` <a name="reset_cloud_knowledge_graph_types" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetCloudKnowledgeGraphTypes"></a>

```python
def reset_cloud_knowledge_graph_types() -> None
```

##### `reset_enable_cloud_knowledge_graph` <a name="reset_enable_cloud_knowledge_graph" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetEnableCloudKnowledgeGraph"></a>

```python
def reset_enable_cloud_knowledge_graph() -> None
```

##### `reset_enable_private_knowledge_graph` <a name="reset_enable_private_knowledge_graph" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetEnablePrivateKnowledgeGraph"></a>

```python
def reset_enable_private_knowledge_graph() -> None
```

##### `reset_feature_config` <a name="reset_feature_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.resetFeatureConfig"></a>

```python
def reset_feature_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.featureConfig">feature_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.cloudKnowledgeGraphTypesInput">cloud_knowledge_graph_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enableCloudKnowledgeGraphInput">enable_cloud_knowledge_graph_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enablePrivateKnowledgeGraphInput">enable_private_knowledge_graph_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.featureConfigInput">feature_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.cloudKnowledgeGraphTypes">cloud_knowledge_graph_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enableCloudKnowledgeGraph">enable_cloud_knowledge_graph</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enablePrivateKnowledgeGraph">enable_private_knowledge_graph</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `feature_config`<sup>Required</sup> <a name="feature_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.featureConfig"></a>

```python
feature_config: GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfigOutputReference</a>

---

##### `cloud_knowledge_graph_types_input`<sup>Optional</sup> <a name="cloud_knowledge_graph_types_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.cloudKnowledgeGraphTypesInput"></a>

```python
cloud_knowledge_graph_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_cloud_knowledge_graph_input`<sup>Optional</sup> <a name="enable_cloud_knowledge_graph_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enableCloudKnowledgeGraphInput"></a>

```python
enable_cloud_knowledge_graph_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_private_knowledge_graph_input`<sup>Optional</sup> <a name="enable_private_knowledge_graph_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enablePrivateKnowledgeGraphInput"></a>

```python
enable_private_knowledge_graph_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `feature_config_input`<sup>Optional</sup> <a name="feature_config_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.featureConfigInput"></a>

```python
feature_config_input: GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigFeatureConfig</a>

---

##### `cloud_knowledge_graph_types`<sup>Required</sup> <a name="cloud_knowledge_graph_types" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.cloudKnowledgeGraphTypes"></a>

```python
cloud_knowledge_graph_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_cloud_knowledge_graph`<sup>Required</sup> <a name="enable_cloud_knowledge_graph" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enableCloudKnowledgeGraph"></a>

```python
enable_cloud_knowledge_graph: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_private_knowledge_graph`<sup>Required</sup> <a name="enable_private_knowledge_graph" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.enablePrivateKnowledgeGraph"></a>

```python
enable_private_knowledge_graph: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig">GoogleDiscoveryEngineSearchEngineKnowledgeGraphConfig</a>

---


### GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference <a name="GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_search_engine

googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetRequiredSubscriptionTier">reset_required_subscription_tier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchAddOns">reset_search_add_ons</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchTier">reset_search_tier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_required_subscription_tier` <a name="reset_required_subscription_tier" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetRequiredSubscriptionTier"></a>

```python
def reset_required_subscription_tier() -> None
```

##### `reset_search_add_ons` <a name="reset_search_add_ons" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchAddOns"></a>

```python
def reset_search_add_ons() -> None
```

##### `reset_search_tier` <a name="reset_search_tier" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchTier"></a>

```python
def reset_search_tier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.requiredSubscriptionTierInput">required_subscription_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOnsInput">search_add_ons_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTierInput">search_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.requiredSubscriptionTier">required_subscription_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOns">search_add_ons</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTier">search_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig">GoogleDiscoveryEngineSearchEngineSearchEngineConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `required_subscription_tier_input`<sup>Optional</sup> <a name="required_subscription_tier_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.requiredSubscriptionTierInput"></a>

```python
required_subscription_tier_input: str
```

- *Type:* str

---

##### `search_add_ons_input`<sup>Optional</sup> <a name="search_add_ons_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOnsInput"></a>

```python
search_add_ons_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `search_tier_input`<sup>Optional</sup> <a name="search_tier_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTierInput"></a>

```python
search_tier_input: str
```

- *Type:* str

---

##### `required_subscription_tier`<sup>Required</sup> <a name="required_subscription_tier" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.requiredSubscriptionTier"></a>

```python
required_subscription_tier: str
```

- *Type:* str

---

##### `search_add_ons`<sup>Required</sup> <a name="search_add_ons" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOns"></a>

```python
search_add_ons: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `search_tier`<sup>Required</sup> <a name="search_tier" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTier"></a>

```python
search_tier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineSearchEngineSearchEngineConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineSearchEngineConfig">GoogleDiscoveryEngineSearchEngineSearchEngineConfig</a>

---


### GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference <a name="GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_search_engine

googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts">GoogleDiscoveryEngineSearchEngineTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDiscoveryEngineSearchEngineTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineSearchEngine.GoogleDiscoveryEngineSearchEngineTimeouts">GoogleDiscoveryEngineSearchEngineTimeouts</a>

---



