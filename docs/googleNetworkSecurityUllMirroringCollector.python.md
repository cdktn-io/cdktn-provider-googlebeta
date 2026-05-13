# `googleNetworkSecurityUllMirroringCollector` Submodule <a name="`googleNetworkSecurityUllMirroringCollector` Submodule" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityUllMirroringCollector <a name="GoogleNetworkSecurityUllMirroringCollector" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector google_network_security_ull_mirroring_collector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_security_ull_mirroring_collector

googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  engine: str,
  forwarding_rule: str,
  location: str,
  ull_mirroring_collector_id: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleNetworkSecurityUllMirroringCollectorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.engine">engine</a></code> | <code>str</code> | The engine resource to which this collector points to, for example: 'projects/123456789/locations/us-south1-d/ullMirroringEngines/my-engine'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.forwardingRule">forwarding_rule</a></code> | <code>str</code> | The regional load balancer which the mirrored traffic should be forwarded to, for example: 'projects/123456789/regions/us-south1/forwardingRules/my-fr'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.location">location</a></code> | <code>str</code> | The cloud location of the collector, e.g. 'us-south1-d' or 'us-south1-e'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.ullMirroringCollectorId">ull_mirroring_collector_id</a></code> | <code>str</code> | The ID to use for the new collector, which will become the final component of the collector's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#id GoogleNetworkSecurityUllMirroringCollector#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#project GoogleNetworkSecurityUllMirroringCollector#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts">GoogleNetworkSecurityUllMirroringCollectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.engine"></a>

- *Type:* str

The engine resource to which this collector points to, for example: 'projects/123456789/locations/us-south1-d/ullMirroringEngines/my-engine'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#engine GoogleNetworkSecurityUllMirroringCollector#engine}

---

##### `forwarding_rule`<sup>Required</sup> <a name="forwarding_rule" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.forwardingRule"></a>

- *Type:* str

The regional load balancer which the mirrored traffic should be forwarded to, for example: 'projects/123456789/regions/us-south1/forwardingRules/my-fr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#forwarding_rule GoogleNetworkSecurityUllMirroringCollector#forwarding_rule}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.location"></a>

- *Type:* str

The cloud location of the collector, e.g. 'us-south1-d' or 'us-south1-e'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#location GoogleNetworkSecurityUllMirroringCollector#location}

---

##### `ull_mirroring_collector_id`<sup>Required</sup> <a name="ull_mirroring_collector_id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.ullMirroringCollectorId"></a>

- *Type:* str

The ID to use for the new collector, which will become the final component of the collector's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#ull_mirroring_collector_id GoogleNetworkSecurityUllMirroringCollector#ull_mirroring_collector_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#id GoogleNetworkSecurityUllMirroringCollector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#labels GoogleNetworkSecurityUllMirroringCollector#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#project GoogleNetworkSecurityUllMirroringCollector#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts">GoogleNetworkSecurityUllMirroringCollectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#timeouts GoogleNetworkSecurityUllMirroringCollector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#create GoogleNetworkSecurityUllMirroringCollector#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#delete GoogleNetworkSecurityUllMirroringCollector#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#update GoogleNetworkSecurityUllMirroringCollector#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleNetworkSecurityUllMirroringCollector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_network_security_ull_mirroring_collector

googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_network_security_ull_mirroring_collector

googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_network_security_ull_mirroring_collector

googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_network_security_ull_mirroring_collector

googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleNetworkSecurityUllMirroringCollector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkSecurityUllMirroringCollector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkSecurityUllMirroringCollector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityUllMirroringCollector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.reconciling">reconciling</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference">GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.forwardingRuleInput">forwarding_rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts">GoogleNetworkSecurityUllMirroringCollectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.ullMirroringCollectorIdInput">ull_mirroring_collector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.forwardingRule">forwarding_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.ullMirroringCollectorId">ull_mirroring_collector_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.timeouts"></a>

```python
timeouts: GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference">GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `forwarding_rule_input`<sup>Optional</sup> <a name="forwarding_rule_input" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.forwardingRuleInput"></a>

```python
forwarding_rule_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleNetworkSecurityUllMirroringCollectorTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts">GoogleNetworkSecurityUllMirroringCollectorTimeouts</a>

---

##### `ull_mirroring_collector_id_input`<sup>Optional</sup> <a name="ull_mirroring_collector_id_input" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.ullMirroringCollectorIdInput"></a>

```python
ull_mirroring_collector_id_input: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `forwarding_rule`<sup>Required</sup> <a name="forwarding_rule" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.forwardingRule"></a>

```python
forwarding_rule: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `ull_mirroring_collector_id`<sup>Required</sup> <a name="ull_mirroring_collector_id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.ullMirroringCollectorId"></a>

```python
ull_mirroring_collector_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityUllMirroringCollectorConfig <a name="GoogleNetworkSecurityUllMirroringCollectorConfig" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_security_ull_mirroring_collector

googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  engine: str,
  forwarding_rule: str,
  location: str,
  ull_mirroring_collector_id: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleNetworkSecurityUllMirroringCollectorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.engine">engine</a></code> | <code>str</code> | The engine resource to which this collector points to, for example: 'projects/123456789/locations/us-south1-d/ullMirroringEngines/my-engine'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.forwardingRule">forwarding_rule</a></code> | <code>str</code> | The regional load balancer which the mirrored traffic should be forwarded to, for example: 'projects/123456789/regions/us-south1/forwardingRules/my-fr'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.location">location</a></code> | <code>str</code> | The cloud location of the collector, e.g. 'us-south1-d' or 'us-south1-e'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.ullMirroringCollectorId">ull_mirroring_collector_id</a></code> | <code>str</code> | The ID to use for the new collector, which will become the final component of the collector's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#id GoogleNetworkSecurityUllMirroringCollector#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#project GoogleNetworkSecurityUllMirroringCollector#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts">GoogleNetworkSecurityUllMirroringCollectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

The engine resource to which this collector points to, for example: 'projects/123456789/locations/us-south1-d/ullMirroringEngines/my-engine'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#engine GoogleNetworkSecurityUllMirroringCollector#engine}

---

##### `forwarding_rule`<sup>Required</sup> <a name="forwarding_rule" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.forwardingRule"></a>

```python
forwarding_rule: str
```

- *Type:* str

The regional load balancer which the mirrored traffic should be forwarded to, for example: 'projects/123456789/regions/us-south1/forwardingRules/my-fr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#forwarding_rule GoogleNetworkSecurityUllMirroringCollector#forwarding_rule}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The cloud location of the collector, e.g. 'us-south1-d' or 'us-south1-e'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#location GoogleNetworkSecurityUllMirroringCollector#location}

---

##### `ull_mirroring_collector_id`<sup>Required</sup> <a name="ull_mirroring_collector_id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.ullMirroringCollectorId"></a>

```python
ull_mirroring_collector_id: str
```

- *Type:* str

The ID to use for the new collector, which will become the final component of the collector's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#ull_mirroring_collector_id GoogleNetworkSecurityUllMirroringCollector#ull_mirroring_collector_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#id GoogleNetworkSecurityUllMirroringCollector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#labels GoogleNetworkSecurityUllMirroringCollector#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#project GoogleNetworkSecurityUllMirroringCollector#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkSecurityUllMirroringCollectorTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts">GoogleNetworkSecurityUllMirroringCollectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#timeouts GoogleNetworkSecurityUllMirroringCollector#timeouts}

---

### GoogleNetworkSecurityUllMirroringCollectorTimeouts <a name="GoogleNetworkSecurityUllMirroringCollectorTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_security_ull_mirroring_collector

googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#create GoogleNetworkSecurityUllMirroringCollector#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#delete GoogleNetworkSecurityUllMirroringCollector#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#update GoogleNetworkSecurityUllMirroringCollector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#create GoogleNetworkSecurityUllMirroringCollector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#delete GoogleNetworkSecurityUllMirroringCollector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_ull_mirroring_collector#update GoogleNetworkSecurityUllMirroringCollector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference <a name="GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_security_ull_mirroring_collector

googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts">GoogleNetworkSecurityUllMirroringCollectorTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleNetworkSecurityUllMirroringCollectorTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts">GoogleNetworkSecurityUllMirroringCollectorTimeouts</a>

---



