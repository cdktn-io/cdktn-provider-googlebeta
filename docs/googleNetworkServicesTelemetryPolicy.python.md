# `googleNetworkServicesTelemetryPolicy` Submodule <a name="`googleNetworkServicesTelemetryPolicy` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesTelemetryPolicy <a name="GoogleNetworkServicesTelemetryPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy google_network_services_telemetry_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_telemetry_policy

googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  telemetry_target: GoogleNetworkServicesTelemetryPolicyTelemetryTarget,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  metrics_configuration: GoogleNetworkServicesTelemetryPolicyMetricsConfiguration = None,
  project: str = None,
  timeouts: GoogleNetworkServicesTelemetryPolicyTimeouts = None,
  tracing_configuration: GoogleNetworkServicesTelemetryPolicyTracingConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Short name of the TelemetryPolicy resource to be created. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.telemetryTarget">telemetry_target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a></code> | telemetry_target block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Provides a human-readable name for the policy. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#id GoogleNetworkServicesTelemetryPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the TelemetryPolicy resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | Location (region) of the TelemetryPolicy resource to be created. Defaults to 'global'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.metricsConfiguration">metrics_configuration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a></code> | metrics_configuration block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#project GoogleNetworkServicesTelemetryPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.tracingConfiguration">tracing_configuration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a></code> | tracing_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.name"></a>

- *Type:* str

Short name of the TelemetryPolicy resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#name GoogleNetworkServicesTelemetryPolicy#name}

---

##### `telemetry_target`<sup>Required</sup> <a name="telemetry_target" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.telemetryTarget"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a>

telemetry_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#telemetry_target GoogleNetworkServicesTelemetryPolicy#telemetry_target}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#deletion_policy GoogleNetworkServicesTelemetryPolicy#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.displayName"></a>

- *Type:* str

Provides a human-readable name for the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#display_name GoogleNetworkServicesTelemetryPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#id GoogleNetworkServicesTelemetryPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of label tags associated with the TelemetryPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#labels GoogleNetworkServicesTelemetryPolicy#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.location"></a>

- *Type:* str

Location (region) of the TelemetryPolicy resource to be created. Defaults to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#location GoogleNetworkServicesTelemetryPolicy#location}

---

##### `metrics_configuration`<sup>Optional</sup> <a name="metrics_configuration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.metricsConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a>

metrics_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#metrics_configuration GoogleNetworkServicesTelemetryPolicy#metrics_configuration}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#project GoogleNetworkServicesTelemetryPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#timeouts GoogleNetworkServicesTelemetryPolicy#timeouts}

---

##### `tracing_configuration`<sup>Optional</sup> <a name="tracing_configuration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.Initializer.parameter.tracingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a>

tracing_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#tracing_configuration GoogleNetworkServicesTelemetryPolicy#tracing_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putMetricsConfiguration">put_metrics_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTelemetryTarget">put_telemetry_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTracingConfiguration">put_tracing_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetMetricsConfiguration">reset_metrics_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetTracingConfiguration">reset_tracing_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_metrics_configuration` <a name="put_metrics_configuration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putMetricsConfiguration"></a>

```python
def put_metrics_configuration(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putMetricsConfiguration.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether metrics are enabled or disabled. Set to true to explicitly enable, or false to explicitly disable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#enabled GoogleNetworkServicesTelemetryPolicy#enabled}

---

##### `put_telemetry_target` <a name="put_telemetry_target" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTelemetryTarget"></a>

```python
def put_telemetry_target(
  resources: typing.List[str]
) -> None
```

###### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTelemetryTarget.parameter.resources"></a>

- *Type:* typing.List[str]

Lists references to the resources that are targeted by the policy.

Types of resources supported:

* 'run.googleapis.com/'
* 'compute.googleapis.com/'
* 'networkservices.googleapis.com/'
  The format must be the full resource name of a supported resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#resources GoogleNetworkServicesTelemetryPolicy#resources}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#create GoogleNetworkServicesTelemetryPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#delete GoogleNetworkServicesTelemetryPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#update GoogleNetworkServicesTelemetryPolicy#update}.

---

##### `put_tracing_configuration` <a name="put_tracing_configuration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTracingConfiguration"></a>

```python
def put_tracing_configuration(
  custom_span_attributes: IResolvable | typing.List[GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes] = None,
  parent_based_sampling: GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling = None,
  sampling_rate: typing.Union[int, float] = None
) -> None
```

###### `custom_span_attributes`<sup>Optional</sup> <a name="custom_span_attributes" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTracingConfiguration.parameter.customSpanAttributes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>]

custom_span_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#custom_span_attributes GoogleNetworkServicesTelemetryPolicy#custom_span_attributes}

---

###### `parent_based_sampling`<sup>Optional</sup> <a name="parent_based_sampling" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTracingConfiguration.parameter.parentBasedSampling"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a>

parent_based_sampling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#parent_based_sampling GoogleNetworkServicesTelemetryPolicy#parent_based_sampling}

---

###### `sampling_rate`<sup>Optional</sup> <a name="sampling_rate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.putTracingConfiguration.parameter.samplingRate"></a>

- *Type:* typing.Union[int, float]

Specifies the tracing sampling rate.

The sampling rate is a float number in the interval [0, 1]. The sampling rate is applied to all requests to the targeted resources. The default value is 0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#sampling_rate GoogleNetworkServicesTelemetryPolicy#sampling_rate}

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_metrics_configuration` <a name="reset_metrics_configuration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetMetricsConfiguration"></a>

```python
def reset_metrics_configuration() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tracing_configuration` <a name="reset_tracing_configuration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.resetTracingConfiguration"></a>

```python
def reset_tracing_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesTelemetryPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_network_services_telemetry_policy

googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_network_services_telemetry_policy

googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_network_services_telemetry_policy

googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_network_services_telemetry_policy

googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleNetworkServicesTelemetryPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkServicesTelemetryPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkServicesTelemetryPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesTelemetryPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.metricsConfiguration">metrics_configuration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference">GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.telemetryTarget">telemetry_target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference">GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference">GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tracingConfiguration">tracing_configuration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference">GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.metricsConfigurationInput">metrics_configuration_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.telemetryTargetInput">telemetry_target_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tracingConfigurationInput">tracing_configuration_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `metrics_configuration`<sup>Required</sup> <a name="metrics_configuration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.metricsConfiguration"></a>

```python
metrics_configuration: GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference">GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference</a>

---

##### `telemetry_target`<sup>Required</sup> <a name="telemetry_target" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.telemetryTarget"></a>

```python
telemetry_target: GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference">GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference">GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference</a>

---

##### `tracing_configuration`<sup>Required</sup> <a name="tracing_configuration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tracingConfiguration"></a>

```python
tracing_configuration: GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference">GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `metrics_configuration_input`<sup>Optional</sup> <a name="metrics_configuration_input" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.metricsConfigurationInput"></a>

```python
metrics_configuration_input: GoogleNetworkServicesTelemetryPolicyMetricsConfiguration
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `telemetry_target_input`<sup>Optional</sup> <a name="telemetry_target_input" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.telemetryTargetInput"></a>

```python
telemetry_target_input: GoogleNetworkServicesTelemetryPolicyTelemetryTarget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleNetworkServicesTelemetryPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a>

---

##### `tracing_configuration_input`<sup>Optional</sup> <a name="tracing_configuration_input" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tracingConfigurationInput"></a>

```python
tracing_configuration_input: GoogleNetworkServicesTelemetryPolicyTracingConfiguration
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesTelemetryPolicyConfig <a name="GoogleNetworkServicesTelemetryPolicyConfig" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_telemetry_policy

googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  telemetry_target: GoogleNetworkServicesTelemetryPolicyTelemetryTarget,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  metrics_configuration: GoogleNetworkServicesTelemetryPolicyMetricsConfiguration = None,
  project: str = None,
  timeouts: GoogleNetworkServicesTelemetryPolicyTimeouts = None,
  tracing_configuration: GoogleNetworkServicesTelemetryPolicyTracingConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.name">name</a></code> | <code>str</code> | Short name of the TelemetryPolicy resource to be created. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.telemetryTarget">telemetry_target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a></code> | telemetry_target block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.displayName">display_name</a></code> | <code>str</code> | Provides a human-readable name for the policy. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#id GoogleNetworkServicesTelemetryPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the TelemetryPolicy resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.location">location</a></code> | <code>str</code> | Location (region) of the TelemetryPolicy resource to be created. Defaults to 'global'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.metricsConfiguration">metrics_configuration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a></code> | metrics_configuration block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#project GoogleNetworkServicesTelemetryPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.tracingConfiguration">tracing_configuration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a></code> | tracing_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Short name of the TelemetryPolicy resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#name GoogleNetworkServicesTelemetryPolicy#name}

---

##### `telemetry_target`<sup>Required</sup> <a name="telemetry_target" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.telemetryTarget"></a>

```python
telemetry_target: GoogleNetworkServicesTelemetryPolicyTelemetryTarget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a>

telemetry_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#telemetry_target GoogleNetworkServicesTelemetryPolicy#telemetry_target}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#deletion_policy GoogleNetworkServicesTelemetryPolicy#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Provides a human-readable name for the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#display_name GoogleNetworkServicesTelemetryPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#id GoogleNetworkServicesTelemetryPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of label tags associated with the TelemetryPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#labels GoogleNetworkServicesTelemetryPolicy#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location (region) of the TelemetryPolicy resource to be created. Defaults to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#location GoogleNetworkServicesTelemetryPolicy#location}

---

##### `metrics_configuration`<sup>Optional</sup> <a name="metrics_configuration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.metricsConfiguration"></a>

```python
metrics_configuration: GoogleNetworkServicesTelemetryPolicyMetricsConfiguration
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a>

metrics_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#metrics_configuration GoogleNetworkServicesTelemetryPolicy#metrics_configuration}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#project GoogleNetworkServicesTelemetryPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesTelemetryPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#timeouts GoogleNetworkServicesTelemetryPolicy#timeouts}

---

##### `tracing_configuration`<sup>Optional</sup> <a name="tracing_configuration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyConfig.property.tracingConfiguration"></a>

```python
tracing_configuration: GoogleNetworkServicesTelemetryPolicyTracingConfiguration
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a>

tracing_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#tracing_configuration GoogleNetworkServicesTelemetryPolicy#tracing_configuration}

---

### GoogleNetworkServicesTelemetryPolicyMetricsConfiguration <a name="GoogleNetworkServicesTelemetryPolicyMetricsConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_telemetry_policy

googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether metrics are enabled or disabled. Set to true to explicitly enable, or false to explicitly disable. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether metrics are enabled or disabled. Set to true to explicitly enable, or false to explicitly disable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#enabled GoogleNetworkServicesTelemetryPolicy#enabled}

---

### GoogleNetworkServicesTelemetryPolicyTelemetryTarget <a name="GoogleNetworkServicesTelemetryPolicyTelemetryTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_telemetry_policy

googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget(
  resources: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget.property.resources">resources</a></code> | <code>typing.List[str]</code> | Lists references to the resources that are targeted by the policy. |

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

Lists references to the resources that are targeted by the policy.

Types of resources supported:

* 'run.googleapis.com/'
* 'compute.googleapis.com/'
* 'networkservices.googleapis.com/'
  The format must be the full resource name of a supported resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#resources GoogleNetworkServicesTelemetryPolicy#resources}

---

### GoogleNetworkServicesTelemetryPolicyTimeouts <a name="GoogleNetworkServicesTelemetryPolicyTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_telemetry_policy

googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#create GoogleNetworkServicesTelemetryPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#delete GoogleNetworkServicesTelemetryPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#update GoogleNetworkServicesTelemetryPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#create GoogleNetworkServicesTelemetryPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#delete GoogleNetworkServicesTelemetryPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#update GoogleNetworkServicesTelemetryPolicy#update}.

---

### GoogleNetworkServicesTelemetryPolicyTracingConfiguration <a name="GoogleNetworkServicesTelemetryPolicyTracingConfiguration" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_telemetry_policy

googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration(
  custom_span_attributes: IResolvable | typing.List[GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes] = None,
  parent_based_sampling: GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling = None,
  sampling_rate: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.customSpanAttributes">custom_span_attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>]</code> | custom_span_attributes block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.parentBasedSampling">parent_based_sampling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a></code> | parent_based_sampling block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.samplingRate">sampling_rate</a></code> | <code>typing.Union[int, float]</code> | Specifies the tracing sampling rate. |

---

##### `custom_span_attributes`<sup>Optional</sup> <a name="custom_span_attributes" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.customSpanAttributes"></a>

```python
custom_span_attributes: IResolvable | typing.List[GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>]

custom_span_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#custom_span_attributes GoogleNetworkServicesTelemetryPolicy#custom_span_attributes}

---

##### `parent_based_sampling`<sup>Optional</sup> <a name="parent_based_sampling" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.parentBasedSampling"></a>

```python
parent_based_sampling: GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a>

parent_based_sampling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#parent_based_sampling GoogleNetworkServicesTelemetryPolicy#parent_based_sampling}

---

##### `sampling_rate`<sup>Optional</sup> <a name="sampling_rate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration.property.samplingRate"></a>

```python
sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the tracing sampling rate.

The sampling rate is a float number in the interval [0, 1]. The sampling rate is applied to all requests to the targeted resources. The default value is 0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#sampling_rate GoogleNetworkServicesTelemetryPolicy#sampling_rate}

---

### GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_telemetry_policy

googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes(
  attribute_name: str,
  from_header_value: str = None,
  literal_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.attributeName">attribute_name</a></code> | <code>str</code> | Defines the key for a custom attribute that is added to the trace spans generated by the Google Cloud Load Balancer (GCLB). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.fromHeaderValue">from_header_value</a></code> | <code>str</code> | Specifies an incoming request header name from which the value for the custom span attribute should be dynamically extracted. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.literalValue">literal_value</a></code> | <code>str</code> | Assigns a static, constant value to the custom trace span attribute defined by the corresponding attributeName. |

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

Defines the key for a custom attribute that is added to the trace spans generated by the Google Cloud Load Balancer (GCLB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#attribute_name GoogleNetworkServicesTelemetryPolicy#attribute_name}

---

##### `from_header_value`<sup>Optional</sup> <a name="from_header_value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.fromHeaderValue"></a>

```python
from_header_value: str
```

- *Type:* str

Specifies an incoming request header name from which the value for the custom span attribute should be dynamically extracted.

Mutually exclusive with literalValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#from_header_value GoogleNetworkServicesTelemetryPolicy#from_header_value}

---

##### `literal_value`<sup>Optional</sup> <a name="literal_value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes.property.literalValue"></a>

```python
literal_value: str
```

- *Type:* str

Assigns a static, constant value to the custom trace span attribute defined by the corresponding attributeName.

Mutually exclusive with fromHeaderValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#literal_value GoogleNetworkServicesTelemetryPolicy#literal_value}

---

### GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_telemetry_policy

googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling(
  enabled: bool | IResolvable = None,
  sampling_rate: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Provides a master switch to respect a sampled bit in incoming traceparentID headers. Default is false. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling.property.samplingRate">sampling_rate</a></code> | <code>typing.Union[int, float]</code> | Specifies the sampling rate to use when the sampled bit is set in the incoming traceparentID header. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Provides a master switch to respect a sampled bit in incoming traceparentID headers. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#enabled GoogleNetworkServicesTelemetryPolicy#enabled}

---

##### `sampling_rate`<sup>Optional</sup> <a name="sampling_rate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling.property.samplingRate"></a>

```python
sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the sampling rate to use when the sampled bit is set in the incoming traceparentID header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#sampling_rate GoogleNetworkServicesTelemetryPolicy#sampling_rate}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference <a name="GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_telemetry_policy

googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesTelemetryPolicyMetricsConfiguration
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyMetricsConfiguration">GoogleNetworkServicesTelemetryPolicyMetricsConfiguration</a>

---


### GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference <a name="GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_telemetry_policy

googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTargetOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesTelemetryPolicyTelemetryTarget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTelemetryTarget">GoogleNetworkServicesTelemetryPolicyTelemetryTarget</a>

---


### GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference <a name="GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_telemetry_policy

googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleNetworkServicesTelemetryPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTimeouts">GoogleNetworkServicesTelemetryPolicyTimeouts</a>

---


### GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_telemetry_policy

googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>]

---


### GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_telemetry_policy

googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resetFromHeaderValue">reset_from_header_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resetLiteralValue">reset_literal_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from_header_value` <a name="reset_from_header_value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resetFromHeaderValue"></a>

```python
def reset_from_header_value() -> None
```

##### `reset_literal_value` <a name="reset_literal_value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.resetLiteralValue"></a>

```python
def reset_literal_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.attributeNameInput">attribute_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fromHeaderValueInput">from_header_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.literalValueInput">literal_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fromHeaderValue">from_header_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.literalValue">literal_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_name_input`<sup>Optional</sup> <a name="attribute_name_input" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.attributeNameInput"></a>

```python
attribute_name_input: str
```

- *Type:* str

---

##### `from_header_value_input`<sup>Optional</sup> <a name="from_header_value_input" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fromHeaderValueInput"></a>

```python
from_header_value_input: str
```

- *Type:* str

---

##### `literal_value_input`<sup>Optional</sup> <a name="literal_value_input" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.literalValueInput"></a>

```python
literal_value_input: str
```

- *Type:* str

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `from_header_value`<sup>Required</sup> <a name="from_header_value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.fromHeaderValue"></a>

```python
from_header_value: str
```

- *Type:* str

---

##### `literal_value`<sup>Required</sup> <a name="literal_value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.literalValue"></a>

```python
literal_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>

---


### GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_telemetry_policy

googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putCustomSpanAttributes">put_custom_span_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putParentBasedSampling">put_parent_based_sampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetCustomSpanAttributes">reset_custom_span_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetParentBasedSampling">reset_parent_based_sampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetSamplingRate">reset_sampling_rate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_span_attributes` <a name="put_custom_span_attributes" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putCustomSpanAttributes"></a>

```python
def put_custom_span_attributes(
  value: IResolvable | typing.List[GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putCustomSpanAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>]

---

##### `put_parent_based_sampling` <a name="put_parent_based_sampling" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putParentBasedSampling"></a>

```python
def put_parent_based_sampling(
  enabled: bool | IResolvable = None,
  sampling_rate: typing.Union[int, float] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putParentBasedSampling.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Provides a master switch to respect a sampled bit in incoming traceparentID headers. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#enabled GoogleNetworkServicesTelemetryPolicy#enabled}

---

###### `sampling_rate`<sup>Optional</sup> <a name="sampling_rate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.putParentBasedSampling.parameter.samplingRate"></a>

- *Type:* typing.Union[int, float]

Specifies the sampling rate to use when the sampled bit is set in the incoming traceparentID header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_telemetry_policy#sampling_rate GoogleNetworkServicesTelemetryPolicy#sampling_rate}

---

##### `reset_custom_span_attributes` <a name="reset_custom_span_attributes" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetCustomSpanAttributes"></a>

```python
def reset_custom_span_attributes() -> None
```

##### `reset_parent_based_sampling` <a name="reset_parent_based_sampling" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetParentBasedSampling"></a>

```python
def reset_parent_based_sampling() -> None
```

##### `reset_sampling_rate` <a name="reset_sampling_rate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.resetSamplingRate"></a>

```python
def reset_sampling_rate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.customSpanAttributes">custom_span_attributes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.parentBasedSampling">parent_based_sampling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.customSpanAttributesInput">custom_span_attributes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.parentBasedSamplingInput">parent_based_sampling_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.samplingRateInput">sampling_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.samplingRate">sampling_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_span_attributes`<sup>Required</sup> <a name="custom_span_attributes" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.customSpanAttributes"></a>

```python
custom_span_attributes: GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributesList</a>

---

##### `parent_based_sampling`<sup>Required</sup> <a name="parent_based_sampling" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.parentBasedSampling"></a>

```python
parent_based_sampling: GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference</a>

---

##### `custom_span_attributes_input`<sup>Optional</sup> <a name="custom_span_attributes_input" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.customSpanAttributesInput"></a>

```python
custom_span_attributes_input: IResolvable | typing.List[GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes">GoogleNetworkServicesTelemetryPolicyTracingConfigurationCustomSpanAttributes</a>]

---

##### `parent_based_sampling_input`<sup>Optional</sup> <a name="parent_based_sampling_input" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.parentBasedSamplingInput"></a>

```python
parent_based_sampling_input: GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a>

---

##### `sampling_rate_input`<sup>Optional</sup> <a name="sampling_rate_input" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.samplingRateInput"></a>

```python
sampling_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sampling_rate`<sup>Required</sup> <a name="sampling_rate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.samplingRate"></a>

```python
sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesTelemetryPolicyTracingConfiguration
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfiguration">GoogleNetworkServicesTelemetryPolicyTracingConfiguration</a>

---


### GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference <a name="GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_services_telemetry_policy

googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resetSamplingRate">reset_sampling_rate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_sampling_rate` <a name="reset_sampling_rate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.resetSamplingRate"></a>

```python
def reset_sampling_rate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.samplingRateInput">sampling_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.samplingRate">sampling_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `sampling_rate_input`<sup>Optional</sup> <a name="sampling_rate_input" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.samplingRateInput"></a>

```python
sampling_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `sampling_rate`<sup>Required</sup> <a name="sampling_rate" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.samplingRate"></a>

```python
sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSamplingOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTelemetryPolicy.GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling">GoogleNetworkServicesTelemetryPolicyTracingConfigurationParentBasedSampling</a>

---



