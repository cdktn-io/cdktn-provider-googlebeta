# `googleDiscoveryEngineDataConnector` Submodule <a name="`googleDiscoveryEngineDataConnector` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineDataConnector <a name="GoogleDiscoveryEngineDataConnector" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector google_discovery_engine_data_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_data_connector

googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  collection_display_name: str,
  collection_id: str,
  data_source: str,
  location: str,
  refresh_interval: str,
  action_config: GoogleDiscoveryEngineDataConnectorActionConfig = None,
  auto_run_disabled: bool | IResolvable = None,
  bap_config: GoogleDiscoveryEngineDataConnectorBapConfig = None,
  connector_modes: typing.List[str] = None,
  data_source_version: typing.Union[int, float] = None,
  deletion_policy: str = None,
  destination_configs: IResolvable | typing.List[GoogleDiscoveryEngineDataConnectorDestinationConfigs] = None,
  entities: IResolvable | typing.List[GoogleDiscoveryEngineDataConnectorEntities] = None,
  id: str = None,
  incremental_refresh_interval: str = None,
  incremental_sync_disabled: bool | IResolvable = None,
  json_params: str = None,
  kms_key_name: str = None,
  params: typing.Mapping[str] = None,
  project: str = None,
  static_ip_enabled: bool | IResolvable = None,
  sync_mode: str = None,
  timeouts: GoogleDiscoveryEngineDataConnectorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.collectionDisplayName">collection_display_name</a></code> | <code>str</code> | The display name of the Collection. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.collectionId">collection_id</a></code> | <code>str</code> | The ID to use for the Collection, which will become the final component of the Collection's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.dataSource">data_source</a></code> | <code>str</code> | The identifier for the data source. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.refreshInterval">refresh_interval</a></code> | <code>str</code> | The refresh interval for data sync. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.actionConfig">action_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig">GoogleDiscoveryEngineDataConnectorActionConfig</a></code> | action_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.autoRunDisabled">auto_run_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether full syncs are paused for this connector. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.bapConfig">bap_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig">GoogleDiscoveryEngineDataConnectorBapConfig</a></code> | bap_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.connectorModes">connector_modes</a></code> | <code>typing.List[str]</code> | The modes enabled for this connector. The possible value can be: 'DATA_INGESTION', 'ACTIONS', 'FEDERATED' 'EUA', 'FEDERATED_AND_EUA'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.dataSourceVersion">data_source_version</a></code> | <code>typing.Union[int, float]</code> | The version of the data source. For example, '3' for Jira v3. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.destinationConfigs">destination_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs">GoogleDiscoveryEngineDataConnectorDestinationConfigs</a>]</code> | destination_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.entities">entities</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities">GoogleDiscoveryEngineDataConnectorEntities</a>]</code> | entities block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#id GoogleDiscoveryEngineDataConnector#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.incrementalRefreshInterval">incremental_refresh_interval</a></code> | <code>str</code> | The refresh interval specifically for incremental data syncs. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.incrementalSyncDisabled">incremental_sync_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether incremental syncs are paused for this connector. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.jsonParams">json_params</a></code> | <code>str</code> | Params needed to access the source in the format of json string. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The KMS key to be used to protect the DataStores managed by this connector. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.params">params</a></code> | <code>typing.Mapping[str]</code> | Params needed to access the source in the format of String-to-String (Key, Value) pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#project GoogleDiscoveryEngineDataConnector#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.staticIpEnabled">static_ip_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether customer has enabled static IP addresses for this connector. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.syncMode">sync_mode</a></code> | <code>str</code> | The data synchronization mode supported by the data connector. The possible value can be: 'PERIODIC', 'STREAMING'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts">GoogleDiscoveryEngineDataConnectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection_display_name`<sup>Required</sup> <a name="collection_display_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.collectionDisplayName"></a>

- *Type:* str

The display name of the Collection.

Should be human readable, used to display collections in the Console
Dashboard. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#collection_display_name GoogleDiscoveryEngineDataConnector#collection_display_name}

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.collectionId"></a>

- *Type:* str

The ID to use for the Collection, which will become the final component of the Collection's resource name.

A new Collection is created as
part of the DataConnector setup. DataConnector is a singleton
resource under Collection, managing all DataStores of the Collection.
This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034)
standard with a length limit of 63 characters. Otherwise, an
INVALID_ARGUMENT error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#collection_id GoogleDiscoveryEngineDataConnector#collection_id}

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.dataSource"></a>

- *Type:* str

The identifier for the data source.

This is a partial list of supported connectors. Please refer to the
[documentation](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/introduction-to-connectors-and-data-stores)
for the full list of connectors.

Supported first-party connectors include:

* 'bigquery'
* 'gcp_fhir'
* 'google_mail'
* 'google_drive'
* 'google_calendar'
* 'google_chat'

Supported third-party connectors include:
Generally available (GA) connectors:

* 'onedrive'
* 'outlook'
* 'confluence'
* 'jira'
* 'servicenow'
* 'sharepoint'

Preview connectors:

* 'asana'
* 'azure_active_directory'
* 'box'
* 'canva'
* 'confluence_server'
* 'custom_connector'
* 'docusign'
* 'dropbox'
* 'dynamics365'
* 'github'
* 'gitlab'
* 'hubspot'
* 'jira_server'
* 'linear'
* 'native_cloud_identity'
* 'notion'
* 'okta'
* 'pagerduty'
* 'peoplesoft'
* 'salesforce'
* 'shopify'
* 'slack'
* 'snowflake'
* 'teams'
* 'trello'
* 'workday'
* 'zendesk'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#data_source GoogleDiscoveryEngineDataConnector#data_source}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.location"></a>

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#location GoogleDiscoveryEngineDataConnector#location}

---

##### `refresh_interval`<sup>Required</sup> <a name="refresh_interval" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.refreshInterval"></a>

- *Type:* str

The refresh interval for data sync.

If duration is set to 0, the data will
be synced in real time. The streaming feature is not supported yet. The
minimum is 30 minutes and maximum is 7 days. When the refresh interval is
set to the same value as the incremental refresh interval, incremental
sync will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#refresh_interval GoogleDiscoveryEngineDataConnector#refresh_interval}

---

##### `action_config`<sup>Optional</sup> <a name="action_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.actionConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig">GoogleDiscoveryEngineDataConnectorActionConfig</a>

action_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#action_config GoogleDiscoveryEngineDataConnector#action_config}

---

##### `auto_run_disabled`<sup>Optional</sup> <a name="auto_run_disabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.autoRunDisabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether full syncs are paused for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#auto_run_disabled GoogleDiscoveryEngineDataConnector#auto_run_disabled}

---

##### `bap_config`<sup>Optional</sup> <a name="bap_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.bapConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig">GoogleDiscoveryEngineDataConnectorBapConfig</a>

bap_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#bap_config GoogleDiscoveryEngineDataConnector#bap_config}

---

##### `connector_modes`<sup>Optional</sup> <a name="connector_modes" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.connectorModes"></a>

- *Type:* typing.List[str]

The modes enabled for this connector. The possible value can be: 'DATA_INGESTION', 'ACTIONS', 'FEDERATED' 'EUA', 'FEDERATED_AND_EUA'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#connector_modes GoogleDiscoveryEngineDataConnector#connector_modes}

---

##### `data_source_version`<sup>Optional</sup> <a name="data_source_version" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.dataSourceVersion"></a>

- *Type:* typing.Union[int, float]

The version of the data source. For example, '3' for Jira v3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#data_source_version GoogleDiscoveryEngineDataConnector#data_source_version}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#deletion_policy GoogleDiscoveryEngineDataConnector#deletion_policy}

---

##### `destination_configs`<sup>Optional</sup> <a name="destination_configs" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.destinationConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs">GoogleDiscoveryEngineDataConnectorDestinationConfigs</a>]

destination_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#destination_configs GoogleDiscoveryEngineDataConnector#destination_configs}

---

##### `entities`<sup>Optional</sup> <a name="entities" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.entities"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities">GoogleDiscoveryEngineDataConnectorEntities</a>]

entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#entities GoogleDiscoveryEngineDataConnector#entities}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#id GoogleDiscoveryEngineDataConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incremental_refresh_interval`<sup>Optional</sup> <a name="incremental_refresh_interval" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.incrementalRefreshInterval"></a>

- *Type:* str

The refresh interval specifically for incremental data syncs.

If unset,
incremental syncs will use the default from env, set to 3hrs.
The minimum is 30 minutes and maximum is 7 days. Applicable to only 3P
connectors. When the refresh interval is
set to the same value as the incremental refresh interval, incremental
sync will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#incremental_refresh_interval GoogleDiscoveryEngineDataConnector#incremental_refresh_interval}

---

##### `incremental_sync_disabled`<sup>Optional</sup> <a name="incremental_sync_disabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.incrementalSyncDisabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether incremental syncs are paused for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#incremental_sync_disabled GoogleDiscoveryEngineDataConnector#incremental_sync_disabled}

---

##### `json_params`<sup>Optional</sup> <a name="json_params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.jsonParams"></a>

- *Type:* str

Params needed to access the source in the format of json string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#json_params GoogleDiscoveryEngineDataConnector#json_params}

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.kmsKeyName"></a>

- *Type:* str

The KMS key to be used to protect the DataStores managed by this connector.

Must be set for requests that need to comply with CMEK Org Policy
protections.
If this field is set and processed successfully, the DataStores created by
this connector will be protected by the KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#kms_key_name GoogleDiscoveryEngineDataConnector#kms_key_name}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.params"></a>

- *Type:* typing.Mapping[str]

Params needed to access the source in the format of String-to-String (Key, Value) pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#params GoogleDiscoveryEngineDataConnector#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#project GoogleDiscoveryEngineDataConnector#project}.

---

##### `static_ip_enabled`<sup>Optional</sup> <a name="static_ip_enabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.staticIpEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether customer has enabled static IP addresses for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#static_ip_enabled GoogleDiscoveryEngineDataConnector#static_ip_enabled}

---

##### `sync_mode`<sup>Optional</sup> <a name="sync_mode" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.syncMode"></a>

- *Type:* str

The data synchronization mode supported by the data connector. The possible value can be: 'PERIODIC', 'STREAMING'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#sync_mode GoogleDiscoveryEngineDataConnector#sync_mode}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts">GoogleDiscoveryEngineDataConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#timeouts GoogleDiscoveryEngineDataConnector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putActionConfig">put_action_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putBapConfig">put_bap_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putDestinationConfigs">put_destination_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putEntities">put_entities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetActionConfig">reset_action_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetAutoRunDisabled">reset_auto_run_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetBapConfig">reset_bap_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetConnectorModes">reset_connector_modes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetDataSourceVersion">reset_data_source_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetDestinationConfigs">reset_destination_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetEntities">reset_entities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetIncrementalRefreshInterval">reset_incremental_refresh_interval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetIncrementalSyncDisabled">reset_incremental_sync_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetJsonParams">reset_json_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetParams">reset_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetStaticIpEnabled">reset_static_ip_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetSyncMode">reset_sync_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_action_config` <a name="put_action_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putActionConfig"></a>

```python
def put_action_config(
  action_params: typing.Mapping[str] = None,
  create_bap_connection: bool | IResolvable = None
) -> None
```

###### `action_params`<sup>Optional</sup> <a name="action_params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putActionConfig.parameter.actionParams"></a>

- *Type:* typing.Mapping[str]

Params needed to configure the actions in the format of String-to-String (Key, Value) pairs.

Contains connection
credentials and configuration for the action connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#action_params GoogleDiscoveryEngineDataConnector#action_params}

---

###### `create_bap_connection`<sup>Optional</sup> <a name="create_bap_connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putActionConfig.parameter.createBapConnection"></a>

- *Type:* bool | cdktn.IResolvable

Whether to create a BAP (Business Application Platform) connection for this action connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#create_bap_connection GoogleDiscoveryEngineDataConnector#create_bap_connection}

---

##### `put_bap_config` <a name="put_bap_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putBapConfig"></a>

```python
def put_bap_config(
  enabled_actions: typing.List[str] = None,
  supported_connector_modes: typing.List[str] = None
) -> None
```

###### `enabled_actions`<sup>Optional</sup> <a name="enabled_actions" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putBapConfig.parameter.enabledActions"></a>

- *Type:* typing.List[str]

The list of enabled actions for this connector. Supported values include: 'create_issue', 'update_issue', 'change_issue_status', 'create_comment', 'update_comment', 'upload_attachment'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#enabled_actions GoogleDiscoveryEngineDataConnector#enabled_actions}

---

###### `supported_connector_modes`<sup>Optional</sup> <a name="supported_connector_modes" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putBapConfig.parameter.supportedConnectorModes"></a>

- *Type:* typing.List[str]

The connector modes supported by the BAP configuration. The possible values include: 'ACTIONS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#supported_connector_modes GoogleDiscoveryEngineDataConnector#supported_connector_modes}

---

##### `put_destination_configs` <a name="put_destination_configs" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putDestinationConfigs"></a>

```python
def put_destination_configs(
  value: IResolvable | typing.List[GoogleDiscoveryEngineDataConnectorDestinationConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putDestinationConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs">GoogleDiscoveryEngineDataConnectorDestinationConfigs</a>]

---

##### `put_entities` <a name="put_entities" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putEntities"></a>

```python
def put_entities(
  value: IResolvable | typing.List[GoogleDiscoveryEngineDataConnectorEntities]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putEntities.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities">GoogleDiscoveryEngineDataConnectorEntities</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#create GoogleDiscoveryEngineDataConnector#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#delete GoogleDiscoveryEngineDataConnector#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#update GoogleDiscoveryEngineDataConnector#update}.

---

##### `reset_action_config` <a name="reset_action_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetActionConfig"></a>

```python
def reset_action_config() -> None
```

##### `reset_auto_run_disabled` <a name="reset_auto_run_disabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetAutoRunDisabled"></a>

```python
def reset_auto_run_disabled() -> None
```

##### `reset_bap_config` <a name="reset_bap_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetBapConfig"></a>

```python
def reset_bap_config() -> None
```

##### `reset_connector_modes` <a name="reset_connector_modes" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetConnectorModes"></a>

```python
def reset_connector_modes() -> None
```

##### `reset_data_source_version` <a name="reset_data_source_version" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetDataSourceVersion"></a>

```python
def reset_data_source_version() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_destination_configs` <a name="reset_destination_configs" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetDestinationConfigs"></a>

```python
def reset_destination_configs() -> None
```

##### `reset_entities` <a name="reset_entities" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetEntities"></a>

```python
def reset_entities() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_incremental_refresh_interval` <a name="reset_incremental_refresh_interval" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetIncrementalRefreshInterval"></a>

```python
def reset_incremental_refresh_interval() -> None
```

##### `reset_incremental_sync_disabled` <a name="reset_incremental_sync_disabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetIncrementalSyncDisabled"></a>

```python
def reset_incremental_sync_disabled() -> None
```

##### `reset_json_params` <a name="reset_json_params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetJsonParams"></a>

```python
def reset_json_params() -> None
```

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```

##### `reset_params` <a name="reset_params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetParams"></a>

```python
def reset_params() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_static_ip_enabled` <a name="reset_static_ip_enabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetStaticIpEnabled"></a>

```python
def reset_static_ip_enabled() -> None
```

##### `reset_sync_mode` <a name="reset_sync_mode" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetSyncMode"></a>

```python
def reset_sync_mode() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineDataConnector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_data_connector

googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_data_connector

googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_data_connector

googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_data_connector

googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleDiscoveryEngineDataConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDiscoveryEngineDataConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDiscoveryEngineDataConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineDataConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.actionConfig">action_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference">GoogleDiscoveryEngineDataConnectorActionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.actionState">action_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.bapConfig">bap_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference">GoogleDiscoveryEngineDataConnectorBapConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.blockingReasons">blocking_reasons</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.connectorType">connector_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.destinationConfigs">destination_configs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList">GoogleDiscoveryEngineDataConnectorDestinationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.entities">entities</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList">GoogleDiscoveryEngineDataConnectorEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.errors">errors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList">GoogleDiscoveryEngineDataConnectorErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.lastSyncTime">last_sync_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.latestPauseTime">latest_pause_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.privateConnectivityProjectId">private_connectivity_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.realtimeState">realtime_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.staticIpAddresses">static_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference">GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.actionConfigInput">action_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig">GoogleDiscoveryEngineDataConnectorActionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.autoRunDisabledInput">auto_run_disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.bapConfigInput">bap_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig">GoogleDiscoveryEngineDataConnectorBapConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.collectionDisplayNameInput">collection_display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.collectionIdInput">collection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.connectorModesInput">connector_modes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dataSourceInput">data_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dataSourceVersionInput">data_source_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.destinationConfigsInput">destination_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs">GoogleDiscoveryEngineDataConnectorDestinationConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.entitiesInput">entities_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities">GoogleDiscoveryEngineDataConnectorEntities</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.incrementalRefreshIntervalInput">incremental_refresh_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.incrementalSyncDisabledInput">incremental_sync_disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.jsonParamsInput">json_params_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.paramsInput">params_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.refreshIntervalInput">refresh_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.staticIpEnabledInput">static_ip_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.syncModeInput">sync_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts">GoogleDiscoveryEngineDataConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.autoRunDisabled">auto_run_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.collectionDisplayName">collection_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.collectionId">collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.connectorModes">connector_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dataSource">data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dataSourceVersion">data_source_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.incrementalRefreshInterval">incremental_refresh_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.incrementalSyncDisabled">incremental_sync_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.jsonParams">json_params</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.params">params</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.refreshInterval">refresh_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.staticIpEnabled">static_ip_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.syncMode">sync_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action_config`<sup>Required</sup> <a name="action_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.actionConfig"></a>

```python
action_config: GoogleDiscoveryEngineDataConnectorActionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference">GoogleDiscoveryEngineDataConnectorActionConfigOutputReference</a>

---

##### `action_state`<sup>Required</sup> <a name="action_state" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.actionState"></a>

```python
action_state: str
```

- *Type:* str

---

##### `bap_config`<sup>Required</sup> <a name="bap_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.bapConfig"></a>

```python
bap_config: GoogleDiscoveryEngineDataConnectorBapConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference">GoogleDiscoveryEngineDataConnectorBapConfigOutputReference</a>

---

##### `blocking_reasons`<sup>Required</sup> <a name="blocking_reasons" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.blockingReasons"></a>

```python
blocking_reasons: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connector_type`<sup>Required</sup> <a name="connector_type" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.connectorType"></a>

```python
connector_type: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `destination_configs`<sup>Required</sup> <a name="destination_configs" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.destinationConfigs"></a>

```python
destination_configs: GoogleDiscoveryEngineDataConnectorDestinationConfigsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList">GoogleDiscoveryEngineDataConnectorDestinationConfigsList</a>

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.entities"></a>

```python
entities: GoogleDiscoveryEngineDataConnectorEntitiesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList">GoogleDiscoveryEngineDataConnectorEntitiesList</a>

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.errors"></a>

```python
errors: GoogleDiscoveryEngineDataConnectorErrorsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList">GoogleDiscoveryEngineDataConnectorErrorsList</a>

---

##### `last_sync_time`<sup>Required</sup> <a name="last_sync_time" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.lastSyncTime"></a>

```python
last_sync_time: str
```

- *Type:* str

---

##### `latest_pause_time`<sup>Required</sup> <a name="latest_pause_time" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.latestPauseTime"></a>

```python
latest_pause_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_connectivity_project_id`<sup>Required</sup> <a name="private_connectivity_project_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.privateConnectivityProjectId"></a>

```python
private_connectivity_project_id: str
```

- *Type:* str

---

##### `realtime_state`<sup>Required</sup> <a name="realtime_state" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.realtimeState"></a>

```python
realtime_state: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `static_ip_addresses`<sup>Required</sup> <a name="static_ip_addresses" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.staticIpAddresses"></a>

```python
static_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.timeouts"></a>

```python
timeouts: GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference">GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `action_config_input`<sup>Optional</sup> <a name="action_config_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.actionConfigInput"></a>

```python
action_config_input: GoogleDiscoveryEngineDataConnectorActionConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig">GoogleDiscoveryEngineDataConnectorActionConfig</a>

---

##### `auto_run_disabled_input`<sup>Optional</sup> <a name="auto_run_disabled_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.autoRunDisabledInput"></a>

```python
auto_run_disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `bap_config_input`<sup>Optional</sup> <a name="bap_config_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.bapConfigInput"></a>

```python
bap_config_input: GoogleDiscoveryEngineDataConnectorBapConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig">GoogleDiscoveryEngineDataConnectorBapConfig</a>

---

##### `collection_display_name_input`<sup>Optional</sup> <a name="collection_display_name_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.collectionDisplayNameInput"></a>

```python
collection_display_name_input: str
```

- *Type:* str

---

##### `collection_id_input`<sup>Optional</sup> <a name="collection_id_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.collectionIdInput"></a>

```python
collection_id_input: str
```

- *Type:* str

---

##### `connector_modes_input`<sup>Optional</sup> <a name="connector_modes_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.connectorModesInput"></a>

```python
connector_modes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_source_input`<sup>Optional</sup> <a name="data_source_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dataSourceInput"></a>

```python
data_source_input: str
```

- *Type:* str

---

##### `data_source_version_input`<sup>Optional</sup> <a name="data_source_version_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dataSourceVersionInput"></a>

```python
data_source_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `destination_configs_input`<sup>Optional</sup> <a name="destination_configs_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.destinationConfigsInput"></a>

```python
destination_configs_input: IResolvable | typing.List[GoogleDiscoveryEngineDataConnectorDestinationConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs">GoogleDiscoveryEngineDataConnectorDestinationConfigs</a>]

---

##### `entities_input`<sup>Optional</sup> <a name="entities_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.entitiesInput"></a>

```python
entities_input: IResolvable | typing.List[GoogleDiscoveryEngineDataConnectorEntities]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities">GoogleDiscoveryEngineDataConnectorEntities</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `incremental_refresh_interval_input`<sup>Optional</sup> <a name="incremental_refresh_interval_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.incrementalRefreshIntervalInput"></a>

```python
incremental_refresh_interval_input: str
```

- *Type:* str

---

##### `incremental_sync_disabled_input`<sup>Optional</sup> <a name="incremental_sync_disabled_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.incrementalSyncDisabledInput"></a>

```python
incremental_sync_disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `json_params_input`<sup>Optional</sup> <a name="json_params_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.jsonParamsInput"></a>

```python
json_params_input: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `params_input`<sup>Optional</sup> <a name="params_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.paramsInput"></a>

```python
params_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `refresh_interval_input`<sup>Optional</sup> <a name="refresh_interval_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.refreshIntervalInput"></a>

```python
refresh_interval_input: str
```

- *Type:* str

---

##### `static_ip_enabled_input`<sup>Optional</sup> <a name="static_ip_enabled_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.staticIpEnabledInput"></a>

```python
static_ip_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `sync_mode_input`<sup>Optional</sup> <a name="sync_mode_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.syncModeInput"></a>

```python
sync_mode_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleDiscoveryEngineDataConnectorTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts">GoogleDiscoveryEngineDataConnectorTimeouts</a>

---

##### `auto_run_disabled`<sup>Required</sup> <a name="auto_run_disabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.autoRunDisabled"></a>

```python
auto_run_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `collection_display_name`<sup>Required</sup> <a name="collection_display_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.collectionDisplayName"></a>

```python
collection_display_name: str
```

- *Type:* str

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

---

##### `connector_modes`<sup>Required</sup> <a name="connector_modes" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.connectorModes"></a>

```python
connector_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

---

##### `data_source_version`<sup>Required</sup> <a name="data_source_version" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dataSourceVersion"></a>

```python
data_source_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `incremental_refresh_interval`<sup>Required</sup> <a name="incremental_refresh_interval" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.incrementalRefreshInterval"></a>

```python
incremental_refresh_interval: str
```

- *Type:* str

---

##### `incremental_sync_disabled`<sup>Required</sup> <a name="incremental_sync_disabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.incrementalSyncDisabled"></a>

```python
incremental_sync_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `json_params`<sup>Required</sup> <a name="json_params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.jsonParams"></a>

```python
json_params: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.params"></a>

```python
params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `refresh_interval`<sup>Required</sup> <a name="refresh_interval" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.refreshInterval"></a>

```python
refresh_interval: str
```

- *Type:* str

---

##### `static_ip_enabled`<sup>Required</sup> <a name="static_ip_enabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.staticIpEnabled"></a>

```python
static_ip_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `sync_mode`<sup>Required</sup> <a name="sync_mode" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.syncMode"></a>

```python
sync_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineDataConnectorActionConfig <a name="GoogleDiscoveryEngineDataConnectorActionConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_data_connector

googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig(
  action_params: typing.Mapping[str] = None,
  create_bap_connection: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig.property.actionParams">action_params</a></code> | <code>typing.Mapping[str]</code> | Params needed to configure the actions in the format of String-to-String (Key, Value) pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig.property.createBapConnection">create_bap_connection</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to create a BAP (Business Application Platform) connection for this action connector. |

---

##### `action_params`<sup>Optional</sup> <a name="action_params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig.property.actionParams"></a>

```python
action_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Params needed to configure the actions in the format of String-to-String (Key, Value) pairs.

Contains connection
credentials and configuration for the action connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#action_params GoogleDiscoveryEngineDataConnector#action_params}

---

##### `create_bap_connection`<sup>Optional</sup> <a name="create_bap_connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig.property.createBapConnection"></a>

```python
create_bap_connection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to create a BAP (Business Application Platform) connection for this action connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#create_bap_connection GoogleDiscoveryEngineDataConnector#create_bap_connection}

---

### GoogleDiscoveryEngineDataConnectorBapConfig <a name="GoogleDiscoveryEngineDataConnectorBapConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_data_connector

googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig(
  enabled_actions: typing.List[str] = None,
  supported_connector_modes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig.property.enabledActions">enabled_actions</a></code> | <code>typing.List[str]</code> | The list of enabled actions for this connector. Supported values include: 'create_issue', 'update_issue', 'change_issue_status', 'create_comment', 'update_comment', 'upload_attachment'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig.property.supportedConnectorModes">supported_connector_modes</a></code> | <code>typing.List[str]</code> | The connector modes supported by the BAP configuration. The possible values include: 'ACTIONS'. |

---

##### `enabled_actions`<sup>Optional</sup> <a name="enabled_actions" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig.property.enabledActions"></a>

```python
enabled_actions: typing.List[str]
```

- *Type:* typing.List[str]

The list of enabled actions for this connector. Supported values include: 'create_issue', 'update_issue', 'change_issue_status', 'create_comment', 'update_comment', 'upload_attachment'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#enabled_actions GoogleDiscoveryEngineDataConnector#enabled_actions}

---

##### `supported_connector_modes`<sup>Optional</sup> <a name="supported_connector_modes" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig.property.supportedConnectorModes"></a>

```python
supported_connector_modes: typing.List[str]
```

- *Type:* typing.List[str]

The connector modes supported by the BAP configuration. The possible values include: 'ACTIONS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#supported_connector_modes GoogleDiscoveryEngineDataConnector#supported_connector_modes}

---

### GoogleDiscoveryEngineDataConnectorConfig <a name="GoogleDiscoveryEngineDataConnectorConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_data_connector

googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  collection_display_name: str,
  collection_id: str,
  data_source: str,
  location: str,
  refresh_interval: str,
  action_config: GoogleDiscoveryEngineDataConnectorActionConfig = None,
  auto_run_disabled: bool | IResolvable = None,
  bap_config: GoogleDiscoveryEngineDataConnectorBapConfig = None,
  connector_modes: typing.List[str] = None,
  data_source_version: typing.Union[int, float] = None,
  deletion_policy: str = None,
  destination_configs: IResolvable | typing.List[GoogleDiscoveryEngineDataConnectorDestinationConfigs] = None,
  entities: IResolvable | typing.List[GoogleDiscoveryEngineDataConnectorEntities] = None,
  id: str = None,
  incremental_refresh_interval: str = None,
  incremental_sync_disabled: bool | IResolvable = None,
  json_params: str = None,
  kms_key_name: str = None,
  params: typing.Mapping[str] = None,
  project: str = None,
  static_ip_enabled: bool | IResolvable = None,
  sync_mode: str = None,
  timeouts: GoogleDiscoveryEngineDataConnectorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.collectionDisplayName">collection_display_name</a></code> | <code>str</code> | The display name of the Collection. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.collectionId">collection_id</a></code> | <code>str</code> | The ID to use for the Collection, which will become the final component of the Collection's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.dataSource">data_source</a></code> | <code>str</code> | The identifier for the data source. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.refreshInterval">refresh_interval</a></code> | <code>str</code> | The refresh interval for data sync. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.actionConfig">action_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig">GoogleDiscoveryEngineDataConnectorActionConfig</a></code> | action_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.autoRunDisabled">auto_run_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether full syncs are paused for this connector. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.bapConfig">bap_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig">GoogleDiscoveryEngineDataConnectorBapConfig</a></code> | bap_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.connectorModes">connector_modes</a></code> | <code>typing.List[str]</code> | The modes enabled for this connector. The possible value can be: 'DATA_INGESTION', 'ACTIONS', 'FEDERATED' 'EUA', 'FEDERATED_AND_EUA'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.dataSourceVersion">data_source_version</a></code> | <code>typing.Union[int, float]</code> | The version of the data source. For example, '3' for Jira v3. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.destinationConfigs">destination_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs">GoogleDiscoveryEngineDataConnectorDestinationConfigs</a>]</code> | destination_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.entities">entities</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities">GoogleDiscoveryEngineDataConnectorEntities</a>]</code> | entities block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#id GoogleDiscoveryEngineDataConnector#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.incrementalRefreshInterval">incremental_refresh_interval</a></code> | <code>str</code> | The refresh interval specifically for incremental data syncs. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.incrementalSyncDisabled">incremental_sync_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether incremental syncs are paused for this connector. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.jsonParams">json_params</a></code> | <code>str</code> | Params needed to access the source in the format of json string. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The KMS key to be used to protect the DataStores managed by this connector. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.params">params</a></code> | <code>typing.Mapping[str]</code> | Params needed to access the source in the format of String-to-String (Key, Value) pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#project GoogleDiscoveryEngineDataConnector#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.staticIpEnabled">static_ip_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether customer has enabled static IP addresses for this connector. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.syncMode">sync_mode</a></code> | <code>str</code> | The data synchronization mode supported by the data connector. The possible value can be: 'PERIODIC', 'STREAMING'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts">GoogleDiscoveryEngineDataConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection_display_name`<sup>Required</sup> <a name="collection_display_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.collectionDisplayName"></a>

```python
collection_display_name: str
```

- *Type:* str

The display name of the Collection.

Should be human readable, used to display collections in the Console
Dashboard. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#collection_display_name GoogleDiscoveryEngineDataConnector#collection_display_name}

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

The ID to use for the Collection, which will become the final component of the Collection's resource name.

A new Collection is created as
part of the DataConnector setup. DataConnector is a singleton
resource under Collection, managing all DataStores of the Collection.
This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034)
standard with a length limit of 63 characters. Otherwise, an
INVALID_ARGUMENT error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#collection_id GoogleDiscoveryEngineDataConnector#collection_id}

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

The identifier for the data source.

This is a partial list of supported connectors. Please refer to the
[documentation](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/introduction-to-connectors-and-data-stores)
for the full list of connectors.

Supported first-party connectors include:

* 'bigquery'
* 'gcp_fhir'
* 'google_mail'
* 'google_drive'
* 'google_calendar'
* 'google_chat'

Supported third-party connectors include:
Generally available (GA) connectors:

* 'onedrive'
* 'outlook'
* 'confluence'
* 'jira'
* 'servicenow'
* 'sharepoint'

Preview connectors:

* 'asana'
* 'azure_active_directory'
* 'box'
* 'canva'
* 'confluence_server'
* 'custom_connector'
* 'docusign'
* 'dropbox'
* 'dynamics365'
* 'github'
* 'gitlab'
* 'hubspot'
* 'jira_server'
* 'linear'
* 'native_cloud_identity'
* 'notion'
* 'okta'
* 'pagerduty'
* 'peoplesoft'
* 'salesforce'
* 'shopify'
* 'slack'
* 'snowflake'
* 'teams'
* 'trello'
* 'workday'
* 'zendesk'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#data_source GoogleDiscoveryEngineDataConnector#data_source}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#location GoogleDiscoveryEngineDataConnector#location}

---

##### `refresh_interval`<sup>Required</sup> <a name="refresh_interval" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.refreshInterval"></a>

```python
refresh_interval: str
```

- *Type:* str

The refresh interval for data sync.

If duration is set to 0, the data will
be synced in real time. The streaming feature is not supported yet. The
minimum is 30 minutes and maximum is 7 days. When the refresh interval is
set to the same value as the incremental refresh interval, incremental
sync will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#refresh_interval GoogleDiscoveryEngineDataConnector#refresh_interval}

---

##### `action_config`<sup>Optional</sup> <a name="action_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.actionConfig"></a>

```python
action_config: GoogleDiscoveryEngineDataConnectorActionConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig">GoogleDiscoveryEngineDataConnectorActionConfig</a>

action_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#action_config GoogleDiscoveryEngineDataConnector#action_config}

---

##### `auto_run_disabled`<sup>Optional</sup> <a name="auto_run_disabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.autoRunDisabled"></a>

```python
auto_run_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether full syncs are paused for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#auto_run_disabled GoogleDiscoveryEngineDataConnector#auto_run_disabled}

---

##### `bap_config`<sup>Optional</sup> <a name="bap_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.bapConfig"></a>

```python
bap_config: GoogleDiscoveryEngineDataConnectorBapConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig">GoogleDiscoveryEngineDataConnectorBapConfig</a>

bap_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#bap_config GoogleDiscoveryEngineDataConnector#bap_config}

---

##### `connector_modes`<sup>Optional</sup> <a name="connector_modes" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.connectorModes"></a>

```python
connector_modes: typing.List[str]
```

- *Type:* typing.List[str]

The modes enabled for this connector. The possible value can be: 'DATA_INGESTION', 'ACTIONS', 'FEDERATED' 'EUA', 'FEDERATED_AND_EUA'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#connector_modes GoogleDiscoveryEngineDataConnector#connector_modes}

---

##### `data_source_version`<sup>Optional</sup> <a name="data_source_version" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.dataSourceVersion"></a>

```python
data_source_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The version of the data source. For example, '3' for Jira v3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#data_source_version GoogleDiscoveryEngineDataConnector#data_source_version}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#deletion_policy GoogleDiscoveryEngineDataConnector#deletion_policy}

---

##### `destination_configs`<sup>Optional</sup> <a name="destination_configs" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.destinationConfigs"></a>

```python
destination_configs: IResolvable | typing.List[GoogleDiscoveryEngineDataConnectorDestinationConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs">GoogleDiscoveryEngineDataConnectorDestinationConfigs</a>]

destination_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#destination_configs GoogleDiscoveryEngineDataConnector#destination_configs}

---

##### `entities`<sup>Optional</sup> <a name="entities" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.entities"></a>

```python
entities: IResolvable | typing.List[GoogleDiscoveryEngineDataConnectorEntities]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities">GoogleDiscoveryEngineDataConnectorEntities</a>]

entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#entities GoogleDiscoveryEngineDataConnector#entities}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#id GoogleDiscoveryEngineDataConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incremental_refresh_interval`<sup>Optional</sup> <a name="incremental_refresh_interval" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.incrementalRefreshInterval"></a>

```python
incremental_refresh_interval: str
```

- *Type:* str

The refresh interval specifically for incremental data syncs.

If unset,
incremental syncs will use the default from env, set to 3hrs.
The minimum is 30 minutes and maximum is 7 days. Applicable to only 3P
connectors. When the refresh interval is
set to the same value as the incremental refresh interval, incremental
sync will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#incremental_refresh_interval GoogleDiscoveryEngineDataConnector#incremental_refresh_interval}

---

##### `incremental_sync_disabled`<sup>Optional</sup> <a name="incremental_sync_disabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.incrementalSyncDisabled"></a>

```python
incremental_sync_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether incremental syncs are paused for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#incremental_sync_disabled GoogleDiscoveryEngineDataConnector#incremental_sync_disabled}

---

##### `json_params`<sup>Optional</sup> <a name="json_params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.jsonParams"></a>

```python
json_params: str
```

- *Type:* str

Params needed to access the source in the format of json string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#json_params GoogleDiscoveryEngineDataConnector#json_params}

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The KMS key to be used to protect the DataStores managed by this connector.

Must be set for requests that need to comply with CMEK Org Policy
protections.
If this field is set and processed successfully, the DataStores created by
this connector will be protected by the KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#kms_key_name GoogleDiscoveryEngineDataConnector#kms_key_name}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.params"></a>

```python
params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Params needed to access the source in the format of String-to-String (Key, Value) pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#params GoogleDiscoveryEngineDataConnector#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#project GoogleDiscoveryEngineDataConnector#project}.

---

##### `static_ip_enabled`<sup>Optional</sup> <a name="static_ip_enabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.staticIpEnabled"></a>

```python
static_ip_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether customer has enabled static IP addresses for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#static_ip_enabled GoogleDiscoveryEngineDataConnector#static_ip_enabled}

---

##### `sync_mode`<sup>Optional</sup> <a name="sync_mode" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.syncMode"></a>

```python
sync_mode: str
```

- *Type:* str

The data synchronization mode supported by the data connector. The possible value can be: 'PERIODIC', 'STREAMING'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#sync_mode GoogleDiscoveryEngineDataConnector#sync_mode}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.timeouts"></a>

```python
timeouts: GoogleDiscoveryEngineDataConnectorTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts">GoogleDiscoveryEngineDataConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#timeouts GoogleDiscoveryEngineDataConnector#timeouts}

---

### GoogleDiscoveryEngineDataConnectorDestinationConfigs <a name="GoogleDiscoveryEngineDataConnectorDestinationConfigs" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_data_connector

googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs(
  destinations: IResolvable | typing.List[GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations] = None,
  key: str = None,
  params: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs.property.destinations">destinations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations">GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations</a>]</code> | destinations block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs.property.key">key</a></code> | <code>str</code> | The key of the destination configuration, for example 'url'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs.property.params">params</a></code> | <code>str</code> | Additional parameters for this destination config in structured json format. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs.property.destinations"></a>

```python
destinations: IResolvable | typing.List[GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations">GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations</a>]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#destinations GoogleDiscoveryEngineDataConnector#destinations}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the destination configuration, for example 'url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#key GoogleDiscoveryEngineDataConnector#key}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs.property.params"></a>

```python
params: str
```

- *Type:* str

Additional parameters for this destination config in structured json format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#params GoogleDiscoveryEngineDataConnector#params}

---

### GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations <a name="GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_data_connector

googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations(
  host: str = None,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations.property.host">host</a></code> | <code>str</code> | The host of the destination, for example 'https://example.atlassian.net'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Target port number accepted by the destination. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations.property.host"></a>

```python
host: str
```

- *Type:* str

The host of the destination, for example 'https://example.atlassian.net'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#host GoogleDiscoveryEngineDataConnector#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Target port number accepted by the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#port GoogleDiscoveryEngineDataConnector#port}

---

### GoogleDiscoveryEngineDataConnectorEntities <a name="GoogleDiscoveryEngineDataConnectorEntities" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_data_connector

googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities(
  entity_name: str = None,
  key_property_mappings: typing.Mapping[str] = None,
  params: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities.property.entityName">entity_name</a></code> | <code>str</code> | The name of the entity. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities.property.keyPropertyMappings">key_property_mappings</a></code> | <code>typing.Mapping[str]</code> | Attributes for indexing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities.property.params">params</a></code> | <code>str</code> | The parameters for the entity to facilitate data ingestion. |

---

##### `entity_name`<sup>Optional</sup> <a name="entity_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities.property.entityName"></a>

```python
entity_name: str
```

- *Type:* str

The name of the entity.

Supported values by data source:

* Salesforce: 'Lead', 'Opportunity', 'Contact', 'Account', 'Case', 'Contract', 'Campaign'
* Jira: project, issue, attachment, comment, worklog
* Confluence: 'Content', 'Space'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#entity_name GoogleDiscoveryEngineDataConnector#entity_name}

---

##### `key_property_mappings`<sup>Optional</sup> <a name="key_property_mappings" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities.property.keyPropertyMappings"></a>

```python
key_property_mappings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Attributes for indexing.

Key: Field name.
Value: The key property to map a field to, such as 'title', and
'description'. Supported key properties:

* 'title': The title for data record. This would be displayed on search
  results.
* 'description': The description for data record. This would be displayed
  on search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#key_property_mappings GoogleDiscoveryEngineDataConnector#key_property_mappings}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities.property.params"></a>

```python
params: str
```

- *Type:* str

The parameters for the entity to facilitate data ingestion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#params GoogleDiscoveryEngineDataConnector#params}

---

### GoogleDiscoveryEngineDataConnectorErrors <a name="GoogleDiscoveryEngineDataConnectorErrors" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrors.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_data_connector

googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrors()
```


### GoogleDiscoveryEngineDataConnectorTimeouts <a name="GoogleDiscoveryEngineDataConnectorTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_data_connector

googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#create GoogleDiscoveryEngineDataConnector#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#delete GoogleDiscoveryEngineDataConnector#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#update GoogleDiscoveryEngineDataConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#create GoogleDiscoveryEngineDataConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#delete GoogleDiscoveryEngineDataConnector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_discovery_engine_data_connector#update GoogleDiscoveryEngineDataConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineDataConnectorActionConfigOutputReference <a name="GoogleDiscoveryEngineDataConnectorActionConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_data_connector

googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.resetActionParams">reset_action_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.resetCreateBapConnection">reset_create_bap_connection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action_params` <a name="reset_action_params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.resetActionParams"></a>

```python
def reset_action_params() -> None
```

##### `reset_create_bap_connection` <a name="reset_create_bap_connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.resetCreateBapConnection"></a>

```python
def reset_create_bap_connection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.isActionConfigured">is_action_configured</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParamsInput">action_params_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnectionInput">create_bap_connection_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParams">action_params</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnection">create_bap_connection</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig">GoogleDiscoveryEngineDataConnectorActionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_action_configured`<sup>Required</sup> <a name="is_action_configured" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.isActionConfigured"></a>

```python
is_action_configured: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `action_params_input`<sup>Optional</sup> <a name="action_params_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParamsInput"></a>

```python
action_params_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `create_bap_connection_input`<sup>Optional</sup> <a name="create_bap_connection_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnectionInput"></a>

```python
create_bap_connection_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `action_params`<sup>Required</sup> <a name="action_params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParams"></a>

```python
action_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `create_bap_connection`<sup>Required</sup> <a name="create_bap_connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnection"></a>

```python
create_bap_connection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineDataConnectorActionConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig">GoogleDiscoveryEngineDataConnectorActionConfig</a>

---


### GoogleDiscoveryEngineDataConnectorBapConfigOutputReference <a name="GoogleDiscoveryEngineDataConnectorBapConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_data_connector

googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.resetEnabledActions">reset_enabled_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.resetSupportedConnectorModes">reset_supported_connector_modes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled_actions` <a name="reset_enabled_actions" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.resetEnabledActions"></a>

```python
def reset_enabled_actions() -> None
```

##### `reset_supported_connector_modes` <a name="reset_supported_connector_modes" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.resetSupportedConnectorModes"></a>

```python
def reset_supported_connector_modes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActionsInput">enabled_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModesInput">supported_connector_modes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActions">enabled_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModes">supported_connector_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig">GoogleDiscoveryEngineDataConnectorBapConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_actions_input`<sup>Optional</sup> <a name="enabled_actions_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActionsInput"></a>

```python
enabled_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_connector_modes_input`<sup>Optional</sup> <a name="supported_connector_modes_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModesInput"></a>

```python
supported_connector_modes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_actions`<sup>Required</sup> <a name="enabled_actions" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActions"></a>

```python
enabled_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_connector_modes`<sup>Required</sup> <a name="supported_connector_modes" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModes"></a>

```python
supported_connector_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineDataConnectorBapConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig">GoogleDiscoveryEngineDataConnectorBapConfig</a>

---


### GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList <a name="GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_data_connector

googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations">GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations">GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations</a>]

---


### GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference <a name="GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_data_connector

googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host` <a name="reset_host" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations">GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations">GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations</a>

---


### GoogleDiscoveryEngineDataConnectorDestinationConfigsList <a name="GoogleDiscoveryEngineDataConnectorDestinationConfigsList" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_data_connector

googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs">GoogleDiscoveryEngineDataConnectorDestinationConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDiscoveryEngineDataConnectorDestinationConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs">GoogleDiscoveryEngineDataConnectorDestinationConfigs</a>]

---


### GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference <a name="GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_data_connector

googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.putDestinations">put_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetDestinations">reset_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetParams">reset_params</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destinations` <a name="put_destinations" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.putDestinations"></a>

```python
def put_destinations(
  value: IResolvable | typing.List[GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.putDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations">GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations</a>]

---

##### `reset_destinations` <a name="reset_destinations" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetDestinations"></a>

```python
def reset_destinations() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_params` <a name="reset_params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetParams"></a>

```python
def reset_params() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList">GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinationsInput">destinations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations">GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.paramsInput">params_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.params">params</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs">GoogleDiscoveryEngineDataConnectorDestinationConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinations"></a>

```python
destinations: GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList">GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList</a>

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinationsInput"></a>

```python
destinations_input: IResolvable | typing.List[GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations">GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations</a>]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `params_input`<sup>Optional</sup> <a name="params_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.paramsInput"></a>

```python
params_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.params"></a>

```python
params: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDiscoveryEngineDataConnectorDestinationConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs">GoogleDiscoveryEngineDataConnectorDestinationConfigs</a>

---


### GoogleDiscoveryEngineDataConnectorEntitiesList <a name="GoogleDiscoveryEngineDataConnectorEntitiesList" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_data_connector

googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDiscoveryEngineDataConnectorEntitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities">GoogleDiscoveryEngineDataConnectorEntities</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDiscoveryEngineDataConnectorEntities]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities">GoogleDiscoveryEngineDataConnectorEntities</a>]

---


### GoogleDiscoveryEngineDataConnectorEntitiesOutputReference <a name="GoogleDiscoveryEngineDataConnectorEntitiesOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_data_connector

googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.resetEntityName">reset_entity_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.resetKeyPropertyMappings">reset_key_property_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.resetParams">reset_params</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_entity_name` <a name="reset_entity_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.resetEntityName"></a>

```python
def reset_entity_name() -> None
```

##### `reset_key_property_mappings` <a name="reset_key_property_mappings" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.resetKeyPropertyMappings"></a>

```python
def reset_key_property_mappings() -> None
```

##### `reset_params` <a name="reset_params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.resetParams"></a>

```python
def reset_params() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.dataStore">data_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.entityNameInput">entity_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappingsInput">key_property_mappings_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.paramsInput">params_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.entityName">entity_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappings">key_property_mappings</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.params">params</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities">GoogleDiscoveryEngineDataConnectorEntities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_store`<sup>Required</sup> <a name="data_store" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.dataStore"></a>

```python
data_store: str
```

- *Type:* str

---

##### `entity_name_input`<sup>Optional</sup> <a name="entity_name_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.entityNameInput"></a>

```python
entity_name_input: str
```

- *Type:* str

---

##### `key_property_mappings_input`<sup>Optional</sup> <a name="key_property_mappings_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappingsInput"></a>

```python
key_property_mappings_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `params_input`<sup>Optional</sup> <a name="params_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.paramsInput"></a>

```python
params_input: str
```

- *Type:* str

---

##### `entity_name`<sup>Required</sup> <a name="entity_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.entityName"></a>

```python
entity_name: str
```

- *Type:* str

---

##### `key_property_mappings`<sup>Required</sup> <a name="key_property_mappings" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappings"></a>

```python
key_property_mappings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.params"></a>

```python
params: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDiscoveryEngineDataConnectorEntities
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities">GoogleDiscoveryEngineDataConnectorEntities</a>

---


### GoogleDiscoveryEngineDataConnectorErrorsList <a name="GoogleDiscoveryEngineDataConnectorErrorsList" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_data_connector

googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDiscoveryEngineDataConnectorErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDiscoveryEngineDataConnectorErrorsOutputReference <a name="GoogleDiscoveryEngineDataConnectorErrorsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_data_connector

googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrors">GoogleDiscoveryEngineDataConnectorErrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineDataConnectorErrors
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrors">GoogleDiscoveryEngineDataConnectorErrors</a>

---


### GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference <a name="GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_data_connector

googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts">GoogleDiscoveryEngineDataConnectorTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDiscoveryEngineDataConnectorTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts">GoogleDiscoveryEngineDataConnectorTimeouts</a>

---



