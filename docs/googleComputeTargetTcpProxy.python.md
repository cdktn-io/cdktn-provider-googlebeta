# `googleComputeTargetTcpProxy` Submodule <a name="`googleComputeTargetTcpProxy` Submodule" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeTargetTcpProxy <a name="GoogleComputeTargetTcpProxy" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy google_compute_target_tcp_proxy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_target_tcp_proxy

googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy(
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
  backend_service: str = None,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  load_balancing_scheme: str = None,
  project: str = None,
  proxy_bind: bool | IResolvable = None,
  proxy_header: str = None,
  timeouts: GoogleComputeTargetTcpProxyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.backendService">backend_service</a></code> | <code>str</code> | A reference to the BackendService resource. This field is optional when the loadBalancingScheme (available in beta) is set to INTERNAL_MANAGED. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#id GoogleComputeTargetTcpProxy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | Specifies the load balancer type. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#project GoogleComputeTargetTcpProxy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.proxyBind">proxy_bind</a></code> | <code>bool \| cdktn.IResolvable</code> | This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.proxyHeader">proxy_header</a></code> | <code>str</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts">GoogleComputeTargetTcpProxyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#name GoogleComputeTargetTcpProxy#name}

---

##### `backend_service`<sup>Optional</sup> <a name="backend_service" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.backendService"></a>

- *Type:* str

A reference to the BackendService resource. This field is optional when the loadBalancingScheme (available in beta) is set to INTERNAL_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#backend_service GoogleComputeTargetTcpProxy#backend_service}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#deletion_policy GoogleComputeTargetTcpProxy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#description GoogleComputeTargetTcpProxy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#id GoogleComputeTargetTcpProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `load_balancing_scheme`<sup>Optional</sup> <a name="load_balancing_scheme" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.loadBalancingScheme"></a>

- *Type:* str

Specifies the load balancer type.

A target TCP proxy created for one type
of load balancer cannot be used with another. For more information, refer
to [Summary of types of Google Cloud load balancers](https://docs.cloud.google.com/load-balancing/docs/load-balancing-overview#summary-gclb). Possible values: ["EXTERNAL", "EXTERNAL_MANAGED", "INTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#load_balancing_scheme GoogleComputeTargetTcpProxy#load_balancing_scheme}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#project GoogleComputeTargetTcpProxy#project}.

---

##### `proxy_bind`<sup>Optional</sup> <a name="proxy_bind" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.proxyBind"></a>

- *Type:* bool | cdktn.IResolvable

This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#proxy_bind GoogleComputeTargetTcpProxy#proxy_bind}

---

##### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.proxyHeader"></a>

- *Type:* str

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#proxy_header GoogleComputeTargetTcpProxy#proxy_header}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts">GoogleComputeTargetTcpProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#timeouts GoogleComputeTargetTcpProxy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetBackendService">reset_backend_service</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetLoadBalancingScheme">reset_load_balancing_scheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetProxyBind">reset_proxy_bind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetProxyHeader">reset_proxy_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#create GoogleComputeTargetTcpProxy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#delete GoogleComputeTargetTcpProxy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#update GoogleComputeTargetTcpProxy#update}.

---

##### `reset_backend_service` <a name="reset_backend_service" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetBackendService"></a>

```python
def reset_backend_service() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_load_balancing_scheme` <a name="reset_load_balancing_scheme" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetLoadBalancingScheme"></a>

```python
def reset_load_balancing_scheme() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_proxy_bind` <a name="reset_proxy_bind" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetProxyBind"></a>

```python
def reset_proxy_bind() -> None
```

##### `reset_proxy_header` <a name="reset_proxy_header" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetProxyHeader"></a>

```python
def reset_proxy_header() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleComputeTargetTcpProxy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_compute_target_tcp_proxy

googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_compute_target_tcp_proxy

googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_compute_target_tcp_proxy

googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_compute_target_tcp_proxy

googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleComputeTargetTcpProxy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeTargetTcpProxy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeTargetTcpProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeTargetTcpProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.proxyId">proxy_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference">GoogleComputeTargetTcpProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.backendServiceInput">backend_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.loadBalancingSchemeInput">load_balancing_scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.proxyBindInput">proxy_bind_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.proxyHeaderInput">proxy_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts">GoogleComputeTargetTcpProxyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.backendService">backend_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.proxyBind">proxy_bind</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.proxyHeader">proxy_header</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `proxy_id`<sup>Required</sup> <a name="proxy_id" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.proxyId"></a>

```python
proxy_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.timeouts"></a>

```python
timeouts: GoogleComputeTargetTcpProxyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference">GoogleComputeTargetTcpProxyTimeoutsOutputReference</a>

---

##### `backend_service_input`<sup>Optional</sup> <a name="backend_service_input" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.backendServiceInput"></a>

```python
backend_service_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `load_balancing_scheme_input`<sup>Optional</sup> <a name="load_balancing_scheme_input" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.loadBalancingSchemeInput"></a>

```python
load_balancing_scheme_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `proxy_bind_input`<sup>Optional</sup> <a name="proxy_bind_input" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.proxyBindInput"></a>

```python
proxy_bind_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proxy_header_input`<sup>Optional</sup> <a name="proxy_header_input" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.proxyHeaderInput"></a>

```python
proxy_header_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleComputeTargetTcpProxyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts">GoogleComputeTargetTcpProxyTimeouts</a>

---

##### `backend_service`<sup>Required</sup> <a name="backend_service" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.backendService"></a>

```python
backend_service: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `load_balancing_scheme`<sup>Required</sup> <a name="load_balancing_scheme" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.loadBalancingScheme"></a>

```python
load_balancing_scheme: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `proxy_bind`<sup>Required</sup> <a name="proxy_bind" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.proxyBind"></a>

```python
proxy_bind: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `proxy_header`<sup>Required</sup> <a name="proxy_header" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeTargetTcpProxyConfig <a name="GoogleComputeTargetTcpProxyConfig" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_target_tcp_proxy

googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  backend_service: str = None,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  load_balancing_scheme: str = None,
  project: str = None,
  proxy_bind: bool | IResolvable = None,
  proxy_header: str = None,
  timeouts: GoogleComputeTargetTcpProxyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.backendService">backend_service</a></code> | <code>str</code> | A reference to the BackendService resource. This field is optional when the loadBalancingScheme (available in beta) is set to INTERNAL_MANAGED. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#id GoogleComputeTargetTcpProxy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | Specifies the load balancer type. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#project GoogleComputeTargetTcpProxy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.proxyBind">proxy_bind</a></code> | <code>bool \| cdktn.IResolvable</code> | This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.proxyHeader">proxy_header</a></code> | <code>str</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts">GoogleComputeTargetTcpProxyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#name GoogleComputeTargetTcpProxy#name}

---

##### `backend_service`<sup>Optional</sup> <a name="backend_service" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.backendService"></a>

```python
backend_service: str
```

- *Type:* str

A reference to the BackendService resource. This field is optional when the loadBalancingScheme (available in beta) is set to INTERNAL_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#backend_service GoogleComputeTargetTcpProxy#backend_service}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#deletion_policy GoogleComputeTargetTcpProxy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#description GoogleComputeTargetTcpProxy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#id GoogleComputeTargetTcpProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `load_balancing_scheme`<sup>Optional</sup> <a name="load_balancing_scheme" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.loadBalancingScheme"></a>

```python
load_balancing_scheme: str
```

- *Type:* str

Specifies the load balancer type.

A target TCP proxy created for one type
of load balancer cannot be used with another. For more information, refer
to [Summary of types of Google Cloud load balancers](https://docs.cloud.google.com/load-balancing/docs/load-balancing-overview#summary-gclb). Possible values: ["EXTERNAL", "EXTERNAL_MANAGED", "INTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#load_balancing_scheme GoogleComputeTargetTcpProxy#load_balancing_scheme}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#project GoogleComputeTargetTcpProxy#project}.

---

##### `proxy_bind`<sup>Optional</sup> <a name="proxy_bind" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.proxyBind"></a>

```python
proxy_bind: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#proxy_bind GoogleComputeTargetTcpProxy#proxy_bind}

---

##### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#proxy_header GoogleComputeTargetTcpProxy#proxy_header}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeTargetTcpProxyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts">GoogleComputeTargetTcpProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#timeouts GoogleComputeTargetTcpProxy#timeouts}

---

### GoogleComputeTargetTcpProxyTimeouts <a name="GoogleComputeTargetTcpProxyTimeouts" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_target_tcp_proxy

googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#create GoogleComputeTargetTcpProxy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#delete GoogleComputeTargetTcpProxy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#update GoogleComputeTargetTcpProxy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#create GoogleComputeTargetTcpProxy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#delete GoogleComputeTargetTcpProxy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_target_tcp_proxy#update GoogleComputeTargetTcpProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeTargetTcpProxyTimeoutsOutputReference <a name="GoogleComputeTargetTcpProxyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_compute_target_tcp_proxy

googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts">GoogleComputeTargetTcpProxyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleComputeTargetTcpProxyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeTargetTcpProxy.GoogleComputeTargetTcpProxyTimeouts">GoogleComputeTargetTcpProxyTimeouts</a>

---



