# `googleNetworkSecurityDnsThreatDetector` Submodule <a name="`googleNetworkSecurityDnsThreatDetector` Submodule" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityDnsThreatDetector <a name="GoogleNetworkSecurityDnsThreatDetector" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector google_network_security_dns_threat_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_security_dns_threat_detector

googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector(
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
  excluded_networks: typing.List[str] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  threat_detector_provider: str = None,
  timeouts: GoogleNetworkSecurityDnsThreatDetectorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the DnsThreatDetector resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.excludedNetworks">excluded_networks</a></code> | <code>typing.List[str]</code> | List of networks that are excluded from detection. Format: projects/{project}/global/networks/{name}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#id GoogleNetworkSecurityDnsThreatDetector#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the DNS Threat Detector resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the DNS Threat Detector. The only supported value is 'global'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#project GoogleNetworkSecurityDnsThreatDetector#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.threatDetectorProvider">threat_detector_provider</a></code> | <code>str</code> | DNS Threat Detection provider. The only supported value is 'INFOBLOX'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts">GoogleNetworkSecurityDnsThreatDetectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.name"></a>

- *Type:* str

Name of the DnsThreatDetector resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#name GoogleNetworkSecurityDnsThreatDetector#name}

---

##### `excluded_networks`<sup>Optional</sup> <a name="excluded_networks" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.excludedNetworks"></a>

- *Type:* typing.List[str]

List of networks that are excluded from detection. Format: projects/{project}/global/networks/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#excluded_networks GoogleNetworkSecurityDnsThreatDetector#excluded_networks}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#id GoogleNetworkSecurityDnsThreatDetector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of label tags associated with the DNS Threat Detector resource.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#labels GoogleNetworkSecurityDnsThreatDetector#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.location"></a>

- *Type:* str

The location of the DNS Threat Detector. The only supported value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#location GoogleNetworkSecurityDnsThreatDetector#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#project GoogleNetworkSecurityDnsThreatDetector#project}.

---

##### `threat_detector_provider`<sup>Optional</sup> <a name="threat_detector_provider" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.threatDetectorProvider"></a>

- *Type:* str

DNS Threat Detection provider. The only supported value is 'INFOBLOX'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#threat_detector_provider GoogleNetworkSecurityDnsThreatDetector#threat_detector_provider}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts">GoogleNetworkSecurityDnsThreatDetectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#timeouts GoogleNetworkSecurityDnsThreatDetector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetExcludedNetworks">reset_excluded_networks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetThreatDetectorProvider">reset_threat_detector_provider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#create GoogleNetworkSecurityDnsThreatDetector#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#delete GoogleNetworkSecurityDnsThreatDetector#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#update GoogleNetworkSecurityDnsThreatDetector#update}.

---

##### `reset_excluded_networks` <a name="reset_excluded_networks" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetExcludedNetworks"></a>

```python
def reset_excluded_networks() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_threat_detector_provider` <a name="reset_threat_detector_provider" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetThreatDetectorProvider"></a>

```python
def reset_threat_detector_provider() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleNetworkSecurityDnsThreatDetector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_network_security_dns_threat_detector

googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_network_security_dns_threat_detector

googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_network_security_dns_threat_detector

googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_network_security_dns_threat_detector

googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleNetworkSecurityDnsThreatDetector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkSecurityDnsThreatDetector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkSecurityDnsThreatDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityDnsThreatDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference">GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.excludedNetworksInput">excluded_networks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.threatDetectorProviderInput">threat_detector_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts">GoogleNetworkSecurityDnsThreatDetectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.excludedNetworks">excluded_networks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.threatDetectorProvider">threat_detector_provider</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.timeouts"></a>

```python
timeouts: GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference">GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `excluded_networks_input`<sup>Optional</sup> <a name="excluded_networks_input" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.excludedNetworksInput"></a>

```python
excluded_networks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `threat_detector_provider_input`<sup>Optional</sup> <a name="threat_detector_provider_input" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.threatDetectorProviderInput"></a>

```python
threat_detector_provider_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleNetworkSecurityDnsThreatDetectorTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts">GoogleNetworkSecurityDnsThreatDetectorTimeouts</a>

---

##### `excluded_networks`<sup>Required</sup> <a name="excluded_networks" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.excludedNetworks"></a>

```python
excluded_networks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `threat_detector_provider`<sup>Required</sup> <a name="threat_detector_provider" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.threatDetectorProvider"></a>

```python
threat_detector_provider: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityDnsThreatDetectorConfig <a name="GoogleNetworkSecurityDnsThreatDetectorConfig" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_security_dns_threat_detector

googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  excluded_networks: typing.List[str] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  threat_detector_provider: str = None,
  timeouts: GoogleNetworkSecurityDnsThreatDetectorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.name">name</a></code> | <code>str</code> | Name of the DnsThreatDetector resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.excludedNetworks">excluded_networks</a></code> | <code>typing.List[str]</code> | List of networks that are excluded from detection. Format: projects/{project}/global/networks/{name}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#id GoogleNetworkSecurityDnsThreatDetector#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the DNS Threat Detector resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.location">location</a></code> | <code>str</code> | The location of the DNS Threat Detector. The only supported value is 'global'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#project GoogleNetworkSecurityDnsThreatDetector#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.threatDetectorProvider">threat_detector_provider</a></code> | <code>str</code> | DNS Threat Detection provider. The only supported value is 'INFOBLOX'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts">GoogleNetworkSecurityDnsThreatDetectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the DnsThreatDetector resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#name GoogleNetworkSecurityDnsThreatDetector#name}

---

##### `excluded_networks`<sup>Optional</sup> <a name="excluded_networks" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.excludedNetworks"></a>

```python
excluded_networks: typing.List[str]
```

- *Type:* typing.List[str]

List of networks that are excluded from detection. Format: projects/{project}/global/networks/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#excluded_networks GoogleNetworkSecurityDnsThreatDetector#excluded_networks}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#id GoogleNetworkSecurityDnsThreatDetector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of label tags associated with the DNS Threat Detector resource.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#labels GoogleNetworkSecurityDnsThreatDetector#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the DNS Threat Detector. The only supported value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#location GoogleNetworkSecurityDnsThreatDetector#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#project GoogleNetworkSecurityDnsThreatDetector#project}.

---

##### `threat_detector_provider`<sup>Optional</sup> <a name="threat_detector_provider" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.threatDetectorProvider"></a>

```python
threat_detector_provider: str
```

- *Type:* str

DNS Threat Detection provider. The only supported value is 'INFOBLOX'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#threat_detector_provider GoogleNetworkSecurityDnsThreatDetector#threat_detector_provider}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkSecurityDnsThreatDetectorTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts">GoogleNetworkSecurityDnsThreatDetectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#timeouts GoogleNetworkSecurityDnsThreatDetector#timeouts}

---

### GoogleNetworkSecurityDnsThreatDetectorTimeouts <a name="GoogleNetworkSecurityDnsThreatDetectorTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_security_dns_threat_detector

googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#create GoogleNetworkSecurityDnsThreatDetector#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#delete GoogleNetworkSecurityDnsThreatDetector#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#update GoogleNetworkSecurityDnsThreatDetector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#create GoogleNetworkSecurityDnsThreatDetector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#delete GoogleNetworkSecurityDnsThreatDetector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_network_security_dns_threat_detector#update GoogleNetworkSecurityDnsThreatDetector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference <a name="GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_network_security_dns_threat_detector

googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts">GoogleNetworkSecurityDnsThreatDetectorTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleNetworkSecurityDnsThreatDetectorTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts">GoogleNetworkSecurityDnsThreatDetectorTimeouts</a>

---



