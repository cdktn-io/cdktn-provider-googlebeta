# `googleChronicleBigQueryExport` Submodule <a name="`googleChronicleBigQueryExport` Submodule" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleBigQueryExport <a name="GoogleChronicleBigQueryExport" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export google_chronicle_big_query_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_big_query_export

googleChronicleBigQueryExport.GoogleChronicleBigQueryExport(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance: str,
  location: str,
  big_query_export_package: str = None,
  entity_graph_settings: GoogleChronicleBigQueryExportEntityGraphSettings = None,
  id: str = None,
  ioc_matches_settings: GoogleChronicleBigQueryExportIocMatchesSettings = None,
  project: str = None,
  rule_detections_settings: GoogleChronicleBigQueryExportRuleDetectionsSettings = None,
  timeouts: GoogleChronicleBigQueryExportTimeouts = None,
  udm_events_aggregates_settings: GoogleChronicleBigQueryExportUdmEventsAggregatesSettings = None,
  udm_events_settings: GoogleChronicleBigQueryExportUdmEventsSettings = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.instance">instance</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.bigQueryExportPackage">big_query_export_package</a></code> | <code>str</code> | The BigQueryExportPackage entitled for the Chronicle instance. Possible values: ["BIG_QUERY_EXPORT_PACKAGE_BYOBQ", "BIG_QUERY_EXPORT_PACKAGE_ADVANCED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.entityGraphSettings">entity_graph_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a></code> | entity_graph_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#id GoogleChronicleBigQueryExport#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.iocMatchesSettings">ioc_matches_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a></code> | ioc_matches_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#project GoogleChronicleBigQueryExport#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.ruleDetectionsSettings">rule_detections_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a></code> | rule_detections_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.udmEventsAggregatesSettings">udm_events_aggregates_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a></code> | udm_events_aggregates_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.udmEventsSettings">udm_events_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a></code> | udm_events_settings block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.instance"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#instance GoogleChronicleBigQueryExport#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#location GoogleChronicleBigQueryExport#location}

---

##### `big_query_export_package`<sup>Optional</sup> <a name="big_query_export_package" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.bigQueryExportPackage"></a>

- *Type:* str

The BigQueryExportPackage entitled for the Chronicle instance. Possible values: ["BIG_QUERY_EXPORT_PACKAGE_BYOBQ", "BIG_QUERY_EXPORT_PACKAGE_ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#big_query_export_package GoogleChronicleBigQueryExport#big_query_export_package}

---

##### `entity_graph_settings`<sup>Optional</sup> <a name="entity_graph_settings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.entityGraphSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a>

entity_graph_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#entity_graph_settings GoogleChronicleBigQueryExport#entity_graph_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#id GoogleChronicleBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ioc_matches_settings`<sup>Optional</sup> <a name="ioc_matches_settings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.iocMatchesSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a>

ioc_matches_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#ioc_matches_settings GoogleChronicleBigQueryExport#ioc_matches_settings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#project GoogleChronicleBigQueryExport#project}.

---

##### `rule_detections_settings`<sup>Optional</sup> <a name="rule_detections_settings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.ruleDetectionsSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a>

rule_detections_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#rule_detections_settings GoogleChronicleBigQueryExport#rule_detections_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#timeouts GoogleChronicleBigQueryExport#timeouts}

---

##### `udm_events_aggregates_settings`<sup>Optional</sup> <a name="udm_events_aggregates_settings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.udmEventsAggregatesSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a>

udm_events_aggregates_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#udm_events_aggregates_settings GoogleChronicleBigQueryExport#udm_events_aggregates_settings}

---

##### `udm_events_settings`<sup>Optional</sup> <a name="udm_events_settings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.udmEventsSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a>

udm_events_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#udm_events_settings GoogleChronicleBigQueryExport#udm_events_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putEntityGraphSettings">put_entity_graph_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putIocMatchesSettings">put_ioc_matches_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putRuleDetectionsSettings">put_rule_detections_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putUdmEventsAggregatesSettings">put_udm_events_aggregates_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putUdmEventsSettings">put_udm_events_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetBigQueryExportPackage">reset_big_query_export_package</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetEntityGraphSettings">reset_entity_graph_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetIocMatchesSettings">reset_ioc_matches_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetRuleDetectionsSettings">reset_rule_detections_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetUdmEventsAggregatesSettings">reset_udm_events_aggregates_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetUdmEventsSettings">reset_udm_events_settings</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_entity_graph_settings` <a name="put_entity_graph_settings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putEntityGraphSettings"></a>

```python
def put_entity_graph_settings(
  enabled: bool | IResolvable,
  retention_days: typing.Union[int, float]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putEntityGraphSettings.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}

---

###### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putEntityGraphSettings.parameter.retentionDays"></a>

- *Type:* typing.Union[int, float]

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}

---

##### `put_ioc_matches_settings` <a name="put_ioc_matches_settings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putIocMatchesSettings"></a>

```python
def put_ioc_matches_settings(
  enabled: bool | IResolvable,
  retention_days: typing.Union[int, float]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putIocMatchesSettings.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}

---

###### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putIocMatchesSettings.parameter.retentionDays"></a>

- *Type:* typing.Union[int, float]

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}

---

##### `put_rule_detections_settings` <a name="put_rule_detections_settings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putRuleDetectionsSettings"></a>

```python
def put_rule_detections_settings(
  enabled: bool | IResolvable,
  retention_days: typing.Union[int, float]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putRuleDetectionsSettings.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}

---

###### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putRuleDetectionsSettings.parameter.retentionDays"></a>

- *Type:* typing.Union[int, float]

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#create GoogleChronicleBigQueryExport#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#delete GoogleChronicleBigQueryExport#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#update GoogleChronicleBigQueryExport#update}.

---

##### `put_udm_events_aggregates_settings` <a name="put_udm_events_aggregates_settings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putUdmEventsAggregatesSettings"></a>

```python
def put_udm_events_aggregates_settings(
  enabled: bool | IResolvable,
  retention_days: typing.Union[int, float]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putUdmEventsAggregatesSettings.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}

---

###### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putUdmEventsAggregatesSettings.parameter.retentionDays"></a>

- *Type:* typing.Union[int, float]

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}

---

##### `put_udm_events_settings` <a name="put_udm_events_settings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putUdmEventsSettings"></a>

```python
def put_udm_events_settings(
  enabled: bool | IResolvable,
  retention_days: typing.Union[int, float]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putUdmEventsSettings.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}

---

###### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putUdmEventsSettings.parameter.retentionDays"></a>

- *Type:* typing.Union[int, float]

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}

---

##### `reset_big_query_export_package` <a name="reset_big_query_export_package" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetBigQueryExportPackage"></a>

```python
def reset_big_query_export_package() -> None
```

##### `reset_entity_graph_settings` <a name="reset_entity_graph_settings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetEntityGraphSettings"></a>

```python
def reset_entity_graph_settings() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ioc_matches_settings` <a name="reset_ioc_matches_settings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetIocMatchesSettings"></a>

```python
def reset_ioc_matches_settings() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_rule_detections_settings` <a name="reset_rule_detections_settings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetRuleDetectionsSettings"></a>

```python
def reset_rule_detections_settings() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_udm_events_aggregates_settings` <a name="reset_udm_events_aggregates_settings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetUdmEventsAggregatesSettings"></a>

```python
def reset_udm_events_aggregates_settings() -> None
```

##### `reset_udm_events_settings` <a name="reset_udm_events_settings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetUdmEventsSettings"></a>

```python
def reset_udm_events_settings() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleChronicleBigQueryExport resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_chronicle_big_query_export

googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_chronicle_big_query_export

googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_chronicle_big_query_export

googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_chronicle_big_query_export

googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleChronicleBigQueryExport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleChronicleBigQueryExport to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleChronicleBigQueryExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleBigQueryExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.entityGraphSettings">entity_graph_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference">GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.iocMatchesSettings">ioc_matches_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference">GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.provisioned">provisioned</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.ruleDetectionsSettings">rule_detections_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference">GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference">GoogleChronicleBigQueryExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsAggregatesSettings">udm_events_aggregates_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference">GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsSettings">udm_events_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference">GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.bigQueryExportPackageInput">big_query_export_package_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.entityGraphSettingsInput">entity_graph_settings_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.iocMatchesSettingsInput">ioc_matches_settings_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.ruleDetectionsSettingsInput">rule_detections_settings_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsAggregatesSettingsInput">udm_events_aggregates_settings_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsSettingsInput">udm_events_settings_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.bigQueryExportPackage">big_query_export_package</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `entity_graph_settings`<sup>Required</sup> <a name="entity_graph_settings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.entityGraphSettings"></a>

```python
entity_graph_settings: GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference">GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference</a>

---

##### `ioc_matches_settings`<sup>Required</sup> <a name="ioc_matches_settings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.iocMatchesSettings"></a>

```python
ioc_matches_settings: GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference">GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provisioned`<sup>Required</sup> <a name="provisioned" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.provisioned"></a>

```python
provisioned: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `rule_detections_settings`<sup>Required</sup> <a name="rule_detections_settings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.ruleDetectionsSettings"></a>

```python
rule_detections_settings: GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference">GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.timeouts"></a>

```python
timeouts: GoogleChronicleBigQueryExportTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference">GoogleChronicleBigQueryExportTimeoutsOutputReference</a>

---

##### `udm_events_aggregates_settings`<sup>Required</sup> <a name="udm_events_aggregates_settings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsAggregatesSettings"></a>

```python
udm_events_aggregates_settings: GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference">GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference</a>

---

##### `udm_events_settings`<sup>Required</sup> <a name="udm_events_settings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsSettings"></a>

```python
udm_events_settings: GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference">GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference</a>

---

##### `big_query_export_package_input`<sup>Optional</sup> <a name="big_query_export_package_input" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.bigQueryExportPackageInput"></a>

```python
big_query_export_package_input: str
```

- *Type:* str

---

##### `entity_graph_settings_input`<sup>Optional</sup> <a name="entity_graph_settings_input" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.entityGraphSettingsInput"></a>

```python
entity_graph_settings_input: GoogleChronicleBigQueryExportEntityGraphSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `ioc_matches_settings_input`<sup>Optional</sup> <a name="ioc_matches_settings_input" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.iocMatchesSettingsInput"></a>

```python
ioc_matches_settings_input: GoogleChronicleBigQueryExportIocMatchesSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rule_detections_settings_input`<sup>Optional</sup> <a name="rule_detections_settings_input" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.ruleDetectionsSettingsInput"></a>

```python
rule_detections_settings_input: GoogleChronicleBigQueryExportRuleDetectionsSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleChronicleBigQueryExportTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a>

---

##### `udm_events_aggregates_settings_input`<sup>Optional</sup> <a name="udm_events_aggregates_settings_input" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsAggregatesSettingsInput"></a>

```python
udm_events_aggregates_settings_input: GoogleChronicleBigQueryExportUdmEventsAggregatesSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a>

---

##### `udm_events_settings_input`<sup>Optional</sup> <a name="udm_events_settings_input" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsSettingsInput"></a>

```python
udm_events_settings_input: GoogleChronicleBigQueryExportUdmEventsSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a>

---

##### `big_query_export_package`<sup>Required</sup> <a name="big_query_export_package" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.bigQueryExportPackage"></a>

```python
big_query_export_package: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleBigQueryExportConfig <a name="GoogleChronicleBigQueryExportConfig" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_big_query_export

googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance: str,
  location: str,
  big_query_export_package: str = None,
  entity_graph_settings: GoogleChronicleBigQueryExportEntityGraphSettings = None,
  id: str = None,
  ioc_matches_settings: GoogleChronicleBigQueryExportIocMatchesSettings = None,
  project: str = None,
  rule_detections_settings: GoogleChronicleBigQueryExportRuleDetectionsSettings = None,
  timeouts: GoogleChronicleBigQueryExportTimeouts = None,
  udm_events_aggregates_settings: GoogleChronicleBigQueryExportUdmEventsAggregatesSettings = None,
  udm_events_settings: GoogleChronicleBigQueryExportUdmEventsSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.instance">instance</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.bigQueryExportPackage">big_query_export_package</a></code> | <code>str</code> | The BigQueryExportPackage entitled for the Chronicle instance. Possible values: ["BIG_QUERY_EXPORT_PACKAGE_BYOBQ", "BIG_QUERY_EXPORT_PACKAGE_ADVANCED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.entityGraphSettings">entity_graph_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a></code> | entity_graph_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#id GoogleChronicleBigQueryExport#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.iocMatchesSettings">ioc_matches_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a></code> | ioc_matches_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#project GoogleChronicleBigQueryExport#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.ruleDetectionsSettings">rule_detections_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a></code> | rule_detections_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.udmEventsAggregatesSettings">udm_events_aggregates_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a></code> | udm_events_aggregates_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.udmEventsSettings">udm_events_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a></code> | udm_events_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#instance GoogleChronicleBigQueryExport#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#location GoogleChronicleBigQueryExport#location}

---

##### `big_query_export_package`<sup>Optional</sup> <a name="big_query_export_package" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.bigQueryExportPackage"></a>

```python
big_query_export_package: str
```

- *Type:* str

The BigQueryExportPackage entitled for the Chronicle instance. Possible values: ["BIG_QUERY_EXPORT_PACKAGE_BYOBQ", "BIG_QUERY_EXPORT_PACKAGE_ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#big_query_export_package GoogleChronicleBigQueryExport#big_query_export_package}

---

##### `entity_graph_settings`<sup>Optional</sup> <a name="entity_graph_settings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.entityGraphSettings"></a>

```python
entity_graph_settings: GoogleChronicleBigQueryExportEntityGraphSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a>

entity_graph_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#entity_graph_settings GoogleChronicleBigQueryExport#entity_graph_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#id GoogleChronicleBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ioc_matches_settings`<sup>Optional</sup> <a name="ioc_matches_settings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.iocMatchesSettings"></a>

```python
ioc_matches_settings: GoogleChronicleBigQueryExportIocMatchesSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a>

ioc_matches_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#ioc_matches_settings GoogleChronicleBigQueryExport#ioc_matches_settings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#project GoogleChronicleBigQueryExport#project}.

---

##### `rule_detections_settings`<sup>Optional</sup> <a name="rule_detections_settings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.ruleDetectionsSettings"></a>

```python
rule_detections_settings: GoogleChronicleBigQueryExportRuleDetectionsSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a>

rule_detections_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#rule_detections_settings GoogleChronicleBigQueryExport#rule_detections_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.timeouts"></a>

```python
timeouts: GoogleChronicleBigQueryExportTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#timeouts GoogleChronicleBigQueryExport#timeouts}

---

##### `udm_events_aggregates_settings`<sup>Optional</sup> <a name="udm_events_aggregates_settings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.udmEventsAggregatesSettings"></a>

```python
udm_events_aggregates_settings: GoogleChronicleBigQueryExportUdmEventsAggregatesSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a>

udm_events_aggregates_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#udm_events_aggregates_settings GoogleChronicleBigQueryExport#udm_events_aggregates_settings}

---

##### `udm_events_settings`<sup>Optional</sup> <a name="udm_events_settings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.udmEventsSettings"></a>

```python
udm_events_settings: GoogleChronicleBigQueryExportUdmEventsSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a>

udm_events_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#udm_events_settings GoogleChronicleBigQueryExport#udm_events_settings}

---

### GoogleChronicleBigQueryExportEntityGraphSettings <a name="GoogleChronicleBigQueryExportEntityGraphSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_big_query_export

googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings(
  enabled: bool | IResolvable,
  retention_days: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | The retention period for the data source in days. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}

---

### GoogleChronicleBigQueryExportIocMatchesSettings <a name="GoogleChronicleBigQueryExportIocMatchesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_big_query_export

googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings(
  enabled: bool | IResolvable,
  retention_days: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | The retention period for the data source in days. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}

---

### GoogleChronicleBigQueryExportRuleDetectionsSettings <a name="GoogleChronicleBigQueryExportRuleDetectionsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_big_query_export

googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings(
  enabled: bool | IResolvable,
  retention_days: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | The retention period for the data source in days. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}

---

### GoogleChronicleBigQueryExportTimeouts <a name="GoogleChronicleBigQueryExportTimeouts" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_big_query_export

googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#create GoogleChronicleBigQueryExport#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#delete GoogleChronicleBigQueryExport#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#update GoogleChronicleBigQueryExport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#create GoogleChronicleBigQueryExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#delete GoogleChronicleBigQueryExport#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#update GoogleChronicleBigQueryExport#update}.

---

### GoogleChronicleBigQueryExportUdmEventsAggregatesSettings <a name="GoogleChronicleBigQueryExportUdmEventsAggregatesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_big_query_export

googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings(
  enabled: bool | IResolvable,
  retention_days: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | The retention period for the data source in days. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}

---

### GoogleChronicleBigQueryExportUdmEventsSettings <a name="GoogleChronicleBigQueryExportUdmEventsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_big_query_export

googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings(
  enabled: bool | IResolvable,
  retention_days: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | The retention period for the data source in days. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference <a name="GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_big_query_export

googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataFreshnessTime">data_freshness_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataVolume">data_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.latestExportJobState">latest_export_job_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDaysInput">retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_freshness_time`<sup>Required</sup> <a name="data_freshness_time" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataFreshnessTime"></a>

```python
data_freshness_time: str
```

- *Type:* str

---

##### `data_volume`<sup>Required</sup> <a name="data_volume" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataVolume"></a>

```python
data_volume: str
```

- *Type:* str

---

##### `latest_export_job_state`<sup>Required</sup> <a name="latest_export_job_state" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.latestExportJobState"></a>

```python
latest_export_job_state: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_days_input`<sup>Optional</sup> <a name="retention_days_input" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDaysInput"></a>

```python
retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleChronicleBigQueryExportEntityGraphSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a>

---


### GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference <a name="GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_big_query_export

googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataFreshnessTime">data_freshness_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataVolume">data_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.latestExportJobState">latest_export_job_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDaysInput">retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_freshness_time`<sup>Required</sup> <a name="data_freshness_time" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataFreshnessTime"></a>

```python
data_freshness_time: str
```

- *Type:* str

---

##### `data_volume`<sup>Required</sup> <a name="data_volume" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataVolume"></a>

```python
data_volume: str
```

- *Type:* str

---

##### `latest_export_job_state`<sup>Required</sup> <a name="latest_export_job_state" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.latestExportJobState"></a>

```python
latest_export_job_state: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_days_input`<sup>Optional</sup> <a name="retention_days_input" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDaysInput"></a>

```python
retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleChronicleBigQueryExportIocMatchesSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a>

---


### GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference <a name="GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_big_query_export

googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataFreshnessTime">data_freshness_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataVolume">data_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.latestExportJobState">latest_export_job_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDaysInput">retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_freshness_time`<sup>Required</sup> <a name="data_freshness_time" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataFreshnessTime"></a>

```python
data_freshness_time: str
```

- *Type:* str

---

##### `data_volume`<sup>Required</sup> <a name="data_volume" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataVolume"></a>

```python
data_volume: str
```

- *Type:* str

---

##### `latest_export_job_state`<sup>Required</sup> <a name="latest_export_job_state" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.latestExportJobState"></a>

```python
latest_export_job_state: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_days_input`<sup>Optional</sup> <a name="retention_days_input" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDaysInput"></a>

```python
retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleChronicleBigQueryExportRuleDetectionsSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a>

---


### GoogleChronicleBigQueryExportTimeoutsOutputReference <a name="GoogleChronicleBigQueryExportTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_big_query_export

googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleChronicleBigQueryExportTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a>

---


### GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference <a name="GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_big_query_export

googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataFreshnessTime">data_freshness_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataVolume">data_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.latestExportJobState">latest_export_job_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDaysInput">retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_freshness_time`<sup>Required</sup> <a name="data_freshness_time" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataFreshnessTime"></a>

```python
data_freshness_time: str
```

- *Type:* str

---

##### `data_volume`<sup>Required</sup> <a name="data_volume" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataVolume"></a>

```python
data_volume: str
```

- *Type:* str

---

##### `latest_export_job_state`<sup>Required</sup> <a name="latest_export_job_state" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.latestExportJobState"></a>

```python
latest_export_job_state: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_days_input`<sup>Optional</sup> <a name="retention_days_input" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDaysInput"></a>

```python
retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleChronicleBigQueryExportUdmEventsAggregatesSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a>

---


### GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference <a name="GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_big_query_export

googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataFreshnessTime">data_freshness_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataVolume">data_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.latestExportJobState">latest_export_job_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDaysInput">retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_freshness_time`<sup>Required</sup> <a name="data_freshness_time" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataFreshnessTime"></a>

```python
data_freshness_time: str
```

- *Type:* str

---

##### `data_volume`<sup>Required</sup> <a name="data_volume" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataVolume"></a>

```python
data_volume: str
```

- *Type:* str

---

##### `latest_export_job_state`<sup>Required</sup> <a name="latest_export_job_state" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.latestExportJobState"></a>

```python
latest_export_job_state: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_days_input`<sup>Optional</sup> <a name="retention_days_input" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDaysInput"></a>

```python
retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleChronicleBigQueryExportUdmEventsSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a>

---



