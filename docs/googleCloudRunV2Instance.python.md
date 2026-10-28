# `googleCloudRunV2Instance` Submodule <a name="`googleCloudRunV2Instance` Submodule" id="@cdktn/provider-google-beta.googleCloudRunV2Instance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudRunV2Instance <a name="GoogleCloudRunV2Instance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance google_cloud_run_v2_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2Instance(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  containers: IResolvable | typing.List[GoogleCloudRunV2InstanceContainers],
  location: str,
  name: str,
  annotations: typing.Mapping[str] = None,
  client: str = None,
  client_version: str = None,
  default_uri_disabled: bool | IResolvable = None,
  deletion_policy: str = None,
  encryption_key: str = None,
  encryption_key_revocation_action: str = None,
  encryption_key_shutdown_duration: str = None,
  id: str = None,
  ingress: str = None,
  invoker_iam_disabled: bool | IResolvable = None,
  labels: typing.Mapping[str] = None,
  launch_stage: str = None,
  project: str = None,
  restart_policy: str = None,
  service_account: str = None,
  timeouts: GoogleCloudRunV2InstanceTimeouts = None,
  volumes: IResolvable | typing.List[GoogleCloudRunV2InstanceVolumes] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.containers">containers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>]</code> | containers block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the cloud run instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.client">client</a></code> | <code>str</code> | Arbitrary identifier for the API client. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.clientVersion">client_version</a></code> | <code>str</code> | Arbitrary version identifier for the API client. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.defaultUriDisabled">default_uri_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Disables public resolution of the default URI of this Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.encryptionKey">encryption_key</a></code> | <code>str</code> | A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.encryptionKeyRevocationAction">encryption_key_revocation_action</a></code> | <code>str</code> | The action to take if the encryption key is revoked. Possible values: ["PREVENT_NEW", "SHUTDOWN"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.encryptionKeyShutdownDuration">encryption_key_shutdown_duration</a></code> | <code>str</code> | If encryptionKeyRevocationAction is SHUTDOWN, the duration before shutting down all instances. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#id GoogleCloudRunV2Instance#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.ingress">ingress</a></code> | <code>str</code> | Provides the ingress settings for this Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.invokerIamDisabled">invoker_iam_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Disables IAM permission check for run.routes.invoke for callers of this Instance. For more information, visit https://cloud.google.com/run/docs/securing/managing-access#invoker_check. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.launchStage">launch_stage</a></code> | <code>str</code> | The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#project GoogleCloudRunV2Instance#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.restartPolicy">restart_policy</a></code> | <code>str</code> | Restart policy for the Instance. If not provided, the default is ON_FAILURE. Possible values: ["ALWAYS", "ON_FAILURE", "NEVER"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | Email address of the IAM service account associated with the Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.volumes">volumes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>]</code> | volumes block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.containers"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>]

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#containers GoogleCloudRunV2Instance#containers}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.location"></a>

- *Type:* str

The location of the cloud run instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#location GoogleCloudRunV2Instance#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.name"></a>

- *Type:* str

Name of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.
Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected in new resources.
This field follows Kubernetes annotations' namespacing, limits, and rules.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#annotations GoogleCloudRunV2Instance#annotations}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.client"></a>

- *Type:* str

Arbitrary identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#client GoogleCloudRunV2Instance#client}

---

##### `client_version`<sup>Optional</sup> <a name="client_version" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.clientVersion"></a>

- *Type:* str

Arbitrary version identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#client_version GoogleCloudRunV2Instance#client_version}

---

##### `default_uri_disabled`<sup>Optional</sup> <a name="default_uri_disabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.defaultUriDisabled"></a>

- *Type:* bool | cdktn.IResolvable

Disables public resolution of the default URI of this Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#default_uri_disabled GoogleCloudRunV2Instance#default_uri_disabled}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#deletion_policy GoogleCloudRunV2Instance#deletion_policy}

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.encryptionKey"></a>

- *Type:* str

A reference to a customer managed encryption key (CMEK) to use to encrypt this container image.

For more information, go to https://cloud.google.com/run/docs/securing/using-cmek

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#encryption_key GoogleCloudRunV2Instance#encryption_key}

---

##### `encryption_key_revocation_action`<sup>Optional</sup> <a name="encryption_key_revocation_action" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.encryptionKeyRevocationAction"></a>

- *Type:* str

The action to take if the encryption key is revoked. Possible values: ["PREVENT_NEW", "SHUTDOWN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#encryption_key_revocation_action GoogleCloudRunV2Instance#encryption_key_revocation_action}

---

##### `encryption_key_shutdown_duration`<sup>Optional</sup> <a name="encryption_key_shutdown_duration" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.encryptionKeyShutdownDuration"></a>

- *Type:* str

If encryptionKeyRevocationAction is SHUTDOWN, the duration before shutting down all instances.

The minimum increment is 1 hour.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#encryption_key_shutdown_duration GoogleCloudRunV2Instance#encryption_key_shutdown_duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#id GoogleCloudRunV2Instance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.ingress"></a>

- *Type:* str

Provides the ingress settings for this Instance.

On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active. Possible values: ["INGRESS_TRAFFIC_ALL", "INGRESS_TRAFFIC_INTERNAL_ONLY", "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#ingress GoogleCloudRunV2Instance#ingress}

---

##### `invoker_iam_disabled`<sup>Optional</sup> <a name="invoker_iam_disabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.invokerIamDisabled"></a>

- *Type:* bool | cdktn.IResolvable

Disables IAM permission check for run.routes.invoke for callers of this Instance. For more information, visit https://cloud.google.com/run/docs/securing/managing-access#invoker_check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#invoker_iam_disabled GoogleCloudRunV2Instance#invoker_iam_disabled}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.
Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#labels GoogleCloudRunV2Instance#labels}

---

##### `launch_stage`<sup>Optional</sup> <a name="launch_stage" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.launchStage"></a>

- *Type:* str

The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#launch_stage GoogleCloudRunV2Instance#launch_stage}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#project GoogleCloudRunV2Instance#project}.

---

##### `restart_policy`<sup>Optional</sup> <a name="restart_policy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.restartPolicy"></a>

- *Type:* str

Restart policy for the Instance. If not provided, the default is ON_FAILURE. Possible values: ["ALWAYS", "ON_FAILURE", "NEVER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#restart_policy GoogleCloudRunV2Instance#restart_policy}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.serviceAccount"></a>

- *Type:* str

Email address of the IAM service account associated with the Instance.

The service account represents the identity of the running Instance, and determines what permissions the instance has.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#service_account GoogleCloudRunV2Instance#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#timeouts GoogleCloudRunV2Instance#timeouts}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.volumes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>]

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#volumes GoogleCloudRunV2Instance#volumes}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putContainers">put_containers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putVolumes">put_volumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetClient">reset_client</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetClientVersion">reset_client_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetDefaultUriDisabled">reset_default_uri_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKey">reset_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKeyRevocationAction">reset_encryption_key_revocation_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKeyShutdownDuration">reset_encryption_key_shutdown_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetIngress">reset_ingress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetInvokerIamDisabled">reset_invoker_iam_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetLaunchStage">reset_launch_stage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetRestartPolicy">reset_restart_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetVolumes">reset_volumes</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_containers` <a name="put_containers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putContainers"></a>

```python
def put_containers(
  value: IResolvable | typing.List[GoogleCloudRunV2InstanceContainers]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putContainers.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#create GoogleCloudRunV2Instance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#delete GoogleCloudRunV2Instance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#update GoogleCloudRunV2Instance#update}.

---

##### `put_volumes` <a name="put_volumes" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putVolumes"></a>

```python
def put_volumes(
  value: IResolvable | typing.List[GoogleCloudRunV2InstanceVolumes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putVolumes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>]

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_client` <a name="reset_client" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetClient"></a>

```python
def reset_client() -> None
```

##### `reset_client_version` <a name="reset_client_version" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetClientVersion"></a>

```python
def reset_client_version() -> None
```

##### `reset_default_uri_disabled` <a name="reset_default_uri_disabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetDefaultUriDisabled"></a>

```python
def reset_default_uri_disabled() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_encryption_key` <a name="reset_encryption_key" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKey"></a>

```python
def reset_encryption_key() -> None
```

##### `reset_encryption_key_revocation_action` <a name="reset_encryption_key_revocation_action" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKeyRevocationAction"></a>

```python
def reset_encryption_key_revocation_action() -> None
```

##### `reset_encryption_key_shutdown_duration` <a name="reset_encryption_key_shutdown_duration" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKeyShutdownDuration"></a>

```python
def reset_encryption_key_shutdown_duration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ingress` <a name="reset_ingress" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetIngress"></a>

```python
def reset_ingress() -> None
```

##### `reset_invoker_iam_disabled` <a name="reset_invoker_iam_disabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetInvokerIamDisabled"></a>

```python
def reset_invoker_iam_disabled() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_launch_stage` <a name="reset_launch_stage" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetLaunchStage"></a>

```python
def reset_launch_stage() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_restart_policy` <a name="reset_restart_policy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetRestartPolicy"></a>

```python
def reset_restart_policy() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_volumes` <a name="reset_volumes" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetVolumes"></a>

```python
def reset_volumes() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleCloudRunV2Instance resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2Instance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2Instance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2Instance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2Instance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleCloudRunV2Instance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleCloudRunV2Instance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleCloudRunV2Instance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCloudRunV2Instance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList">GoogleCloudRunV2InstanceConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containers">containers</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList">GoogleCloudRunV2InstanceContainersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containerStatuses">container_statuses</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList">GoogleCloudRunV2InstanceContainerStatusesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.generation">generation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.lastModifier">last_modifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.logUri">log_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.observedGeneration">observed_generation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.reconciling">reconciling</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.satisfiesPzs">satisfies_pzs</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terminalCondition">terminal_condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList">GoogleCloudRunV2InstanceTerminalConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference">GoogleCloudRunV2InstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.urls">urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.volumes">volumes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList">GoogleCloudRunV2InstanceVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientInput">client_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientVersionInput">client_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containersInput">containers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.defaultUriDisabledInput">default_uri_disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyInput">encryption_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyRevocationActionInput">encryption_key_revocation_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyShutdownDurationInput">encryption_key_shutdown_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.ingressInput">ingress_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.invokerIamDisabledInput">invoker_iam_disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.launchStageInput">launch_stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.restartPolicyInput">restart_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.volumesInput">volumes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.client">client</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientVersion">client_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.defaultUriDisabled">default_uri_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKey">encryption_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyRevocationAction">encryption_key_revocation_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyShutdownDuration">encryption_key_shutdown_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.ingress">ingress</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.invokerIamDisabled">invoker_iam_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.launchStage">launch_stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.restartPolicy">restart_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.conditions"></a>

```python
conditions: GoogleCloudRunV2InstanceConditionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList">GoogleCloudRunV2InstanceConditionsList</a>

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containers"></a>

```python
containers: GoogleCloudRunV2InstanceContainersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList">GoogleCloudRunV2InstanceContainersList</a>

---

##### `container_statuses`<sup>Required</sup> <a name="container_statuses" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containerStatuses"></a>

```python
container_statuses: GoogleCloudRunV2InstanceContainerStatusesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList">GoogleCloudRunV2InstanceContainerStatusesList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.generation"></a>

```python
generation: str
```

- *Type:* str

---

##### `last_modifier`<sup>Required</sup> <a name="last_modifier" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.lastModifier"></a>

```python
last_modifier: str
```

- *Type:* str

---

##### `log_uri`<sup>Required</sup> <a name="log_uri" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.logUri"></a>

```python
log_uri: str
```

- *Type:* str

---

##### `observed_generation`<sup>Required</sup> <a name="observed_generation" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.observedGeneration"></a>

```python
observed_generation: str
```

- *Type:* str

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `satisfies_pzs`<sup>Required</sup> <a name="satisfies_pzs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.satisfiesPzs"></a>

```python
satisfies_pzs: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `terminal_condition`<sup>Required</sup> <a name="terminal_condition" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terminalCondition"></a>

```python
terminal_condition: GoogleCloudRunV2InstanceTerminalConditionList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList">GoogleCloudRunV2InstanceTerminalConditionList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.timeouts"></a>

```python
timeouts: GoogleCloudRunV2InstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference">GoogleCloudRunV2InstanceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.urls"></a>

```python
urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.volumes"></a>

```python
volumes: GoogleCloudRunV2InstanceVolumesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList">GoogleCloudRunV2InstanceVolumesList</a>

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `client_input`<sup>Optional</sup> <a name="client_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientInput"></a>

```python
client_input: str
```

- *Type:* str

---

##### `client_version_input`<sup>Optional</sup> <a name="client_version_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientVersionInput"></a>

```python
client_version_input: str
```

- *Type:* str

---

##### `containers_input`<sup>Optional</sup> <a name="containers_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containersInput"></a>

```python
containers_input: IResolvable | typing.List[GoogleCloudRunV2InstanceContainers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>]

---

##### `default_uri_disabled_input`<sup>Optional</sup> <a name="default_uri_disabled_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.defaultUriDisabledInput"></a>

```python
default_uri_disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `encryption_key_input`<sup>Optional</sup> <a name="encryption_key_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyInput"></a>

```python
encryption_key_input: str
```

- *Type:* str

---

##### `encryption_key_revocation_action_input`<sup>Optional</sup> <a name="encryption_key_revocation_action_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyRevocationActionInput"></a>

```python
encryption_key_revocation_action_input: str
```

- *Type:* str

---

##### `encryption_key_shutdown_duration_input`<sup>Optional</sup> <a name="encryption_key_shutdown_duration_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyShutdownDurationInput"></a>

```python
encryption_key_shutdown_duration_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingress_input`<sup>Optional</sup> <a name="ingress_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.ingressInput"></a>

```python
ingress_input: str
```

- *Type:* str

---

##### `invoker_iam_disabled_input`<sup>Optional</sup> <a name="invoker_iam_disabled_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.invokerIamDisabledInput"></a>

```python
invoker_iam_disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `launch_stage_input`<sup>Optional</sup> <a name="launch_stage_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.launchStageInput"></a>

```python
launch_stage_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `restart_policy_input`<sup>Optional</sup> <a name="restart_policy_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.restartPolicyInput"></a>

```python
restart_policy_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleCloudRunV2InstanceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a>

---

##### `volumes_input`<sup>Optional</sup> <a name="volumes_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.volumesInput"></a>

```python
volumes_input: IResolvable | typing.List[GoogleCloudRunV2InstanceVolumes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `client`<sup>Required</sup> <a name="client" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.client"></a>

```python
client: str
```

- *Type:* str

---

##### `client_version`<sup>Required</sup> <a name="client_version" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientVersion"></a>

```python
client_version: str
```

- *Type:* str

---

##### `default_uri_disabled`<sup>Required</sup> <a name="default_uri_disabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.defaultUriDisabled"></a>

```python
default_uri_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

---

##### `encryption_key_revocation_action`<sup>Required</sup> <a name="encryption_key_revocation_action" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyRevocationAction"></a>

```python
encryption_key_revocation_action: str
```

- *Type:* str

---

##### `encryption_key_shutdown_duration`<sup>Required</sup> <a name="encryption_key_shutdown_duration" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyShutdownDuration"></a>

```python
encryption_key_shutdown_duration: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.ingress"></a>

```python
ingress: str
```

- *Type:* str

---

##### `invoker_iam_disabled`<sup>Required</sup> <a name="invoker_iam_disabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.invokerIamDisabled"></a>

```python
invoker_iam_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `launch_stage`<sup>Required</sup> <a name="launch_stage" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.launchStage"></a>

```python
launch_stage: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `restart_policy`<sup>Required</sup> <a name="restart_policy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.restartPolicy"></a>

```python
restart_policy: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudRunV2InstanceConditions <a name="GoogleCloudRunV2InstanceConditions" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditions.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditions()
```


### GoogleCloudRunV2InstanceConfig <a name="GoogleCloudRunV2InstanceConfig" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  containers: IResolvable | typing.List[GoogleCloudRunV2InstanceContainers],
  location: str,
  name: str,
  annotations: typing.Mapping[str] = None,
  client: str = None,
  client_version: str = None,
  default_uri_disabled: bool | IResolvable = None,
  deletion_policy: str = None,
  encryption_key: str = None,
  encryption_key_revocation_action: str = None,
  encryption_key_shutdown_duration: str = None,
  id: str = None,
  ingress: str = None,
  invoker_iam_disabled: bool | IResolvable = None,
  labels: typing.Mapping[str] = None,
  launch_stage: str = None,
  project: str = None,
  restart_policy: str = None,
  service_account: str = None,
  timeouts: GoogleCloudRunV2InstanceTimeouts = None,
  volumes: IResolvable | typing.List[GoogleCloudRunV2InstanceVolumes] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.containers">containers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>]</code> | containers block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.location">location</a></code> | <code>str</code> | The location of the cloud run instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.name">name</a></code> | <code>str</code> | Name of the Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.client">client</a></code> | <code>str</code> | Arbitrary identifier for the API client. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.clientVersion">client_version</a></code> | <code>str</code> | Arbitrary version identifier for the API client. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.defaultUriDisabled">default_uri_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Disables public resolution of the default URI of this Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKey">encryption_key</a></code> | <code>str</code> | A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKeyRevocationAction">encryption_key_revocation_action</a></code> | <code>str</code> | The action to take if the encryption key is revoked. Possible values: ["PREVENT_NEW", "SHUTDOWN"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKeyShutdownDuration">encryption_key_shutdown_duration</a></code> | <code>str</code> | If encryptionKeyRevocationAction is SHUTDOWN, the duration before shutting down all instances. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#id GoogleCloudRunV2Instance#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.ingress">ingress</a></code> | <code>str</code> | Provides the ingress settings for this Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.invokerIamDisabled">invoker_iam_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Disables IAM permission check for run.routes.invoke for callers of this Instance. For more information, visit https://cloud.google.com/run/docs/securing/managing-access#invoker_check. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.launchStage">launch_stage</a></code> | <code>str</code> | The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#project GoogleCloudRunV2Instance#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.restartPolicy">restart_policy</a></code> | <code>str</code> | Restart policy for the Instance. If not provided, the default is ON_FAILURE. Possible values: ["ALWAYS", "ON_FAILURE", "NEVER"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | Email address of the IAM service account associated with the Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.volumes">volumes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>]</code> | volumes block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.containers"></a>

```python
containers: IResolvable | typing.List[GoogleCloudRunV2InstanceContainers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>]

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#containers GoogleCloudRunV2Instance#containers}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the cloud run instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#location GoogleCloudRunV2Instance#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.
Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected in new resources.
This field follows Kubernetes annotations' namespacing, limits, and rules.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#annotations GoogleCloudRunV2Instance#annotations}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.client"></a>

```python
client: str
```

- *Type:* str

Arbitrary identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#client GoogleCloudRunV2Instance#client}

---

##### `client_version`<sup>Optional</sup> <a name="client_version" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.clientVersion"></a>

```python
client_version: str
```

- *Type:* str

Arbitrary version identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#client_version GoogleCloudRunV2Instance#client_version}

---

##### `default_uri_disabled`<sup>Optional</sup> <a name="default_uri_disabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.defaultUriDisabled"></a>

```python
default_uri_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Disables public resolution of the default URI of this Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#default_uri_disabled GoogleCloudRunV2Instance#default_uri_disabled}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#deletion_policy GoogleCloudRunV2Instance#deletion_policy}

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

A reference to a customer managed encryption key (CMEK) to use to encrypt this container image.

For more information, go to https://cloud.google.com/run/docs/securing/using-cmek

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#encryption_key GoogleCloudRunV2Instance#encryption_key}

---

##### `encryption_key_revocation_action`<sup>Optional</sup> <a name="encryption_key_revocation_action" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKeyRevocationAction"></a>

```python
encryption_key_revocation_action: str
```

- *Type:* str

The action to take if the encryption key is revoked. Possible values: ["PREVENT_NEW", "SHUTDOWN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#encryption_key_revocation_action GoogleCloudRunV2Instance#encryption_key_revocation_action}

---

##### `encryption_key_shutdown_duration`<sup>Optional</sup> <a name="encryption_key_shutdown_duration" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKeyShutdownDuration"></a>

```python
encryption_key_shutdown_duration: str
```

- *Type:* str

If encryptionKeyRevocationAction is SHUTDOWN, the duration before shutting down all instances.

The minimum increment is 1 hour.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#encryption_key_shutdown_duration GoogleCloudRunV2Instance#encryption_key_shutdown_duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#id GoogleCloudRunV2Instance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.ingress"></a>

```python
ingress: str
```

- *Type:* str

Provides the ingress settings for this Instance.

On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active. Possible values: ["INGRESS_TRAFFIC_ALL", "INGRESS_TRAFFIC_INTERNAL_ONLY", "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#ingress GoogleCloudRunV2Instance#ingress}

---

##### `invoker_iam_disabled`<sup>Optional</sup> <a name="invoker_iam_disabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.invokerIamDisabled"></a>

```python
invoker_iam_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Disables IAM permission check for run.routes.invoke for callers of this Instance. For more information, visit https://cloud.google.com/run/docs/securing/managing-access#invoker_check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#invoker_iam_disabled GoogleCloudRunV2Instance#invoker_iam_disabled}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.
Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#labels GoogleCloudRunV2Instance#labels}

---

##### `launch_stage`<sup>Optional</sup> <a name="launch_stage" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.launchStage"></a>

```python
launch_stage: str
```

- *Type:* str

The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#launch_stage GoogleCloudRunV2Instance#launch_stage}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#project GoogleCloudRunV2Instance#project}.

---

##### `restart_policy`<sup>Optional</sup> <a name="restart_policy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.restartPolicy"></a>

```python
restart_policy: str
```

- *Type:* str

Restart policy for the Instance. If not provided, the default is ON_FAILURE. Possible values: ["ALWAYS", "ON_FAILURE", "NEVER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#restart_policy GoogleCloudRunV2Instance#restart_policy}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Email address of the IAM service account associated with the Instance.

The service account represents the identity of the running Instance, and determines what permissions the instance has.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#service_account GoogleCloudRunV2Instance#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.timeouts"></a>

```python
timeouts: GoogleCloudRunV2InstanceTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#timeouts GoogleCloudRunV2Instance#timeouts}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.volumes"></a>

```python
volumes: IResolvable | typing.List[GoogleCloudRunV2InstanceVolumes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>]

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#volumes GoogleCloudRunV2Instance#volumes}

---

### GoogleCloudRunV2InstanceContainers <a name="GoogleCloudRunV2InstanceContainers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers(
  image: str,
  args: typing.List[str] = None,
  command: typing.List[str] = None,
  env: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersEnv] = None,
  liveness_probe: GoogleCloudRunV2InstanceContainersLivenessProbe = None,
  name: str = None,
  ports: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersPorts] = None,
  resources: GoogleCloudRunV2InstanceContainersResources = None,
  startup_probe: GoogleCloudRunV2InstanceContainersStartupProbe = None,
  volume_mounts: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersVolumeMounts] = None,
  working_dir: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.image">image</a></code> | <code>str</code> | URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.args">args</a></code> | <code>typing.List[str]</code> | Arguments to the entrypoint. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.command">command</a></code> | <code>typing.List[str]</code> | Entrypoint array. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.env">env</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>]</code> | env block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.livenessProbe">liveness_probe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a></code> | liveness_probe block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.name">name</a></code> | <code>str</code> | Name of the container specified as a DNS_LABEL. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.ports">ports</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>]</code> | ports block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a></code> | resources block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.startupProbe">startup_probe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a></code> | startup_probe block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.volumeMounts">volume_mounts</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>]</code> | volume_mounts block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.workingDir">working_dir</a></code> | <code>str</code> | Container's working directory. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.image"></a>

```python
image: str
```

- *Type:* str

URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#image GoogleCloudRunV2Instance#image}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

Arguments to the entrypoint.

The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#args GoogleCloudRunV2Instance#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

Entrypoint array.

Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#command GoogleCloudRunV2Instance#command}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.env"></a>

```python
env: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersEnv]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#env GoogleCloudRunV2Instance#env}

---

##### `liveness_probe`<sup>Optional</sup> <a name="liveness_probe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.livenessProbe"></a>

```python
liveness_probe: GoogleCloudRunV2InstanceContainersLivenessProbe
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a>

liveness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#liveness_probe GoogleCloudRunV2Instance#liveness_probe}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the container specified as a DNS_LABEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.ports"></a>

```python
ports: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersPorts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#ports GoogleCloudRunV2Instance#ports}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.resources"></a>

```python
resources: GoogleCloudRunV2InstanceContainersResources
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#resources GoogleCloudRunV2Instance#resources}

---

##### `startup_probe`<sup>Optional</sup> <a name="startup_probe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.startupProbe"></a>

```python
startup_probe: GoogleCloudRunV2InstanceContainersStartupProbe
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a>

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#startup_probe GoogleCloudRunV2Instance#startup_probe}

---

##### `volume_mounts`<sup>Optional</sup> <a name="volume_mounts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.volumeMounts"></a>

```python
volume_mounts: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersVolumeMounts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>]

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#volume_mounts GoogleCloudRunV2Instance#volume_mounts}

---

##### `working_dir`<sup>Optional</sup> <a name="working_dir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.workingDir"></a>

```python
working_dir: str
```

- *Type:* str

Container's working directory.

If not specified, the container runtime's default will be used, which might be configured in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#working_dir GoogleCloudRunV2Instance#working_dir}

---

### GoogleCloudRunV2InstanceContainersEnv <a name="GoogleCloudRunV2InstanceContainersEnv" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv(
  name: str,
  value: str = None,
  value_source: GoogleCloudRunV2InstanceContainersEnvValueSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.name">name</a></code> | <code>str</code> | Name of the environment variable. Must be a C_IDENTIFIER, and may not exceed 32768 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.value">value</a></code> | <code>str</code> | Literal value of the environment variable. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.valueSource">value_source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a></code> | value_source block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the environment variable. Must be a C_IDENTIFIER, and may not exceed 32768 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.value"></a>

```python
value: str
```

- *Type:* str

Literal value of the environment variable.

Defaults to "" and the maximum allowed length is 32768 characters. Variable references are not supported in Cloud Run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#value GoogleCloudRunV2Instance#value}

---

##### `value_source`<sup>Optional</sup> <a name="value_source" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.valueSource"></a>

```python
value_source: GoogleCloudRunV2InstanceContainersEnvValueSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a>

value_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#value_source GoogleCloudRunV2Instance#value_source}

---

### GoogleCloudRunV2InstanceContainersEnvValueSource <a name="GoogleCloudRunV2InstanceContainersEnvValueSource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource(
  secret_key_ref: GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource.property.secretKeyRef">secret_key_ref</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `secret_key_ref`<sup>Optional</sup> <a name="secret_key_ref" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource.property.secretKeyRef"></a>

```python
secret_key_ref: GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#secret_key_ref GoogleCloudRunV2Instance#secret_key_ref}

---

### GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef <a name="GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef(
  secret: str,
  version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.property.secret">secret</a></code> | <code>str</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.property.version">version</a></code> | <code>str</code> | The Cloud Secret Manager secret version. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.property.secret"></a>

```python
secret: str
```

- *Type:* str

The name of the secret in Cloud Secret Manager.

Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#secret GoogleCloudRunV2Instance#secret}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.property.version"></a>

```python
version: str
```

- *Type:* str

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#version GoogleCloudRunV2Instance#version}

---

### GoogleCloudRunV2InstanceContainersLivenessProbe <a name="GoogleCloudRunV2InstanceContainersLivenessProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe(
  failure_threshold: typing.Union[int, float] = None,
  grpc: GoogleCloudRunV2InstanceContainersLivenessProbeGrpc = None,
  http_get: GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet = None,
  initial_delay_seconds: typing.Union[int, float] = None,
  period_seconds: typing.Union[int, float] = None,
  timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.grpc">grpc</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a></code> | grpc block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.httpGet">http_get</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.initialDelaySeconds">initial_delay_seconds</a></code> | <code>typing.Union[int, float]</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.periodSeconds">period_seconds</a></code> | <code>typing.Union[int, float]</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Optional. |

---

##### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#failure_threshold GoogleCloudRunV2Instance#failure_threshold}

---

##### `grpc`<sup>Optional</sup> <a name="grpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.grpc"></a>

```python
grpc: GoogleCloudRunV2InstanceContainersLivenessProbeGrpc
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#grpc GoogleCloudRunV2Instance#grpc}

---

##### `http_get`<sup>Optional</sup> <a name="http_get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.httpGet"></a>

```python
http_get: GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#http_get GoogleCloudRunV2Instance#http_get}

---

##### `initial_delay_seconds`<sup>Optional</sup> <a name="initial_delay_seconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.initialDelaySeconds"></a>

```python
initial_delay_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#initial_delay_seconds GoogleCloudRunV2Instance#initial_delay_seconds}

---

##### `period_seconds`<sup>Optional</sup> <a name="period_seconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.periodSeconds"></a>

```python
period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#period_seconds GoogleCloudRunV2Instance#period_seconds}

---

##### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#timeout_seconds GoogleCloudRunV2Instance#timeout_seconds}

---

### GoogleCloudRunV2InstanceContainersLivenessProbeGrpc <a name="GoogleCloudRunV2InstanceContainersLivenessProbeGrpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc(
  port: typing.Union[int, float] = None,
  service: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc.property.service">service</a></code> | <code>str</code> | Optional. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

Port number of the gRPC service. Number must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc.property.service"></a>

```python
service: str
```

- *Type:* str

Optional.

Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md ). If this is not specified, the default behavior is defined by gRPC

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#service GoogleCloudRunV2Instance#service}

---

### GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet <a name="GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet(
  http_headers: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders] = None,
  path: str = None,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.httpHeaders">http_headers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>]</code> | http_headers block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.path">path</a></code> | <code>str</code> | Optional. Path to access on the HTTP server. Defaults to '/'. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Optional. |

---

##### `http_headers`<sup>Optional</sup> <a name="http_headers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.httpHeaders"></a>

```python
http_headers: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>]

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#http_headers GoogleCloudRunV2Instance#http_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.path"></a>

```python
path: str
```

- *Type:* str

Optional. Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#path GoogleCloudRunV2Instance#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

### GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders <a name="GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.property.name">name</a></code> | <code>str</code> | Required. The header field name. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.property.value">value</a></code> | <code>str</code> | Optional. The header field value. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.property.name"></a>

```python
name: str
```

- *Type:* str

Required. The header field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.property.value"></a>

```python
value: str
```

- *Type:* str

Optional. The header field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#value GoogleCloudRunV2Instance#value}

---

### GoogleCloudRunV2InstanceContainersPorts <a name="GoogleCloudRunV2InstanceContainersPorts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts(
  container_port: typing.Union[int, float] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts.property.containerPort">container_port</a></code> | <code>typing.Union[int, float]</code> | Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts.property.name">name</a></code> | <code>str</code> | If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c". |

---

##### `container_port`<sup>Optional</sup> <a name="container_port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts.property.containerPort"></a>

```python
container_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#container_port GoogleCloudRunV2Instance#container_port}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts.property.name"></a>

```python
name: str
```

- *Type:* str

If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

### GoogleCloudRunV2InstanceContainersResources <a name="GoogleCloudRunV2InstanceContainersResources" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources(
  limits: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources.property.limits">limits</a></code> | <code>typing.Mapping[str]</code> | Only memory and CPU are supported. |

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources.property.limits"></a>

```python
limits: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Only memory and CPU are supported.

Use key 'cpu' for CPU limit, 'memory' for memory limit. Note: The only supported values for CPU are '1', '2', '4', '6', and '8'. Setting 4 CPU requires at least 2Gi of memory, setting 6 or more CPU requires at least 4Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#limits GoogleCloudRunV2Instance#limits}

---

### GoogleCloudRunV2InstanceContainersStartupProbe <a name="GoogleCloudRunV2InstanceContainersStartupProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe(
  failure_threshold: typing.Union[int, float] = None,
  grpc: GoogleCloudRunV2InstanceContainersStartupProbeGrpc = None,
  http_get: GoogleCloudRunV2InstanceContainersStartupProbeHttpGet = None,
  initial_delay_seconds: typing.Union[int, float] = None,
  period_seconds: typing.Union[int, float] = None,
  tcp_socket: GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket = None,
  timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.grpc">grpc</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a></code> | grpc block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.httpGet">http_get</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.initialDelaySeconds">initial_delay_seconds</a></code> | <code>typing.Union[int, float]</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.periodSeconds">period_seconds</a></code> | <code>typing.Union[int, float]</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.tcpSocket">tcp_socket</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a></code> | tcp_socket block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Optional. |

---

##### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#failure_threshold GoogleCloudRunV2Instance#failure_threshold}

---

##### `grpc`<sup>Optional</sup> <a name="grpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.grpc"></a>

```python
grpc: GoogleCloudRunV2InstanceContainersStartupProbeGrpc
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#grpc GoogleCloudRunV2Instance#grpc}

---

##### `http_get`<sup>Optional</sup> <a name="http_get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.httpGet"></a>

```python
http_get: GoogleCloudRunV2InstanceContainersStartupProbeHttpGet
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#http_get GoogleCloudRunV2Instance#http_get}

---

##### `initial_delay_seconds`<sup>Optional</sup> <a name="initial_delay_seconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.initialDelaySeconds"></a>

```python
initial_delay_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#initial_delay_seconds GoogleCloudRunV2Instance#initial_delay_seconds}

---

##### `period_seconds`<sup>Optional</sup> <a name="period_seconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.periodSeconds"></a>

```python
period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#period_seconds GoogleCloudRunV2Instance#period_seconds}

---

##### `tcp_socket`<sup>Optional</sup> <a name="tcp_socket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.tcpSocket"></a>

```python
tcp_socket: GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a>

tcp_socket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#tcp_socket GoogleCloudRunV2Instance#tcp_socket}

---

##### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#timeout_seconds GoogleCloudRunV2Instance#timeout_seconds}

---

### GoogleCloudRunV2InstanceContainersStartupProbeGrpc <a name="GoogleCloudRunV2InstanceContainersStartupProbeGrpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc(
  port: typing.Union[int, float] = None,
  service: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc.property.service">service</a></code> | <code>str</code> | Optional. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

Port number of the gRPC service. Number must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc.property.service"></a>

```python
service: str
```

- *Type:* str

Optional.

Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md ). If this is not specified, the default behavior is defined by gRPC

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#service GoogleCloudRunV2Instance#service}

---

### GoogleCloudRunV2InstanceContainersStartupProbeHttpGet <a name="GoogleCloudRunV2InstanceContainersStartupProbeHttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet(
  http_headers: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders] = None,
  path: str = None,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.httpHeaders">http_headers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>]</code> | http_headers block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.path">path</a></code> | <code>str</code> | Optional. Path to access on the HTTP server. Defaults to '/'. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Optional. |

---

##### `http_headers`<sup>Optional</sup> <a name="http_headers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.httpHeaders"></a>

```python
http_headers: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>]

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#http_headers GoogleCloudRunV2Instance#http_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.path"></a>

```python
path: str
```

- *Type:* str

Optional. Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#path GoogleCloudRunV2Instance#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

### GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders <a name="GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.property.name">name</a></code> | <code>str</code> | Required. The header field name. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.property.value">value</a></code> | <code>str</code> | Optional. The header field value. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.property.name"></a>

```python
name: str
```

- *Type:* str

Required. The header field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.property.value"></a>

```python
value: str
```

- *Type:* str

Optional. The header field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#value GoogleCloudRunV2Instance#value}

---

### GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket <a name="GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket(
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Optional. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

### GoogleCloudRunV2InstanceContainerStatuses <a name="GoogleCloudRunV2InstanceContainerStatuses" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatuses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatuses.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatuses()
```


### GoogleCloudRunV2InstanceContainersVolumeMounts <a name="GoogleCloudRunV2InstanceContainersVolumeMounts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts(
  mount_path: str,
  name: str,
  sub_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.mountPath">mount_path</a></code> | <code>str</code> | Path within the container at which the volume should be mounted. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.name">name</a></code> | <code>str</code> | This must match the Name of a Volume. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.subPath">sub_path</a></code> | <code>str</code> | Path within the volume from which the container's volume should be mounted. |

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

Path within the container at which the volume should be mounted.

Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#mount_path GoogleCloudRunV2Instance#mount_path}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.name"></a>

```python
name: str
```

- *Type:* str

This must match the Name of a Volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `sub_path`<sup>Optional</sup> <a name="sub_path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.subPath"></a>

```python
sub_path: str
```

- *Type:* str

Path within the volume from which the container's volume should be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#sub_path GoogleCloudRunV2Instance#sub_path}

---

### GoogleCloudRunV2InstanceTerminalCondition <a name="GoogleCloudRunV2InstanceTerminalCondition" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalCondition.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalCondition()
```


### GoogleCloudRunV2InstanceTimeouts <a name="GoogleCloudRunV2InstanceTimeouts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#create GoogleCloudRunV2Instance#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#delete GoogleCloudRunV2Instance#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#update GoogleCloudRunV2Instance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#create GoogleCloudRunV2Instance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#delete GoogleCloudRunV2Instance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#update GoogleCloudRunV2Instance#update}.

---

### GoogleCloudRunV2InstanceVolumes <a name="GoogleCloudRunV2InstanceVolumes" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes(
  name: str,
  cloud_sql_instance: GoogleCloudRunV2InstanceVolumesCloudSqlInstance = None,
  empty_dir: GoogleCloudRunV2InstanceVolumesEmptyDir = None,
  gcs: GoogleCloudRunV2InstanceVolumesGcs = None,
  nfs: GoogleCloudRunV2InstanceVolumesNfs = None,
  secret: GoogleCloudRunV2InstanceVolumesSecret = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.name">name</a></code> | <code>str</code> | Volume's name. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.cloudSqlInstance">cloud_sql_instance</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a></code> | cloud_sql_instance block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.emptyDir">empty_dir</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a></code> | empty_dir block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.gcs">gcs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a></code> | gcs block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.nfs">nfs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a></code> | nfs block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a></code> | secret block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.name"></a>

```python
name: str
```

- *Type:* str

Volume's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `cloud_sql_instance`<sup>Optional</sup> <a name="cloud_sql_instance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.cloudSqlInstance"></a>

```python
cloud_sql_instance: GoogleCloudRunV2InstanceVolumesCloudSqlInstance
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a>

cloud_sql_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#cloud_sql_instance GoogleCloudRunV2Instance#cloud_sql_instance}

---

##### `empty_dir`<sup>Optional</sup> <a name="empty_dir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.emptyDir"></a>

```python
empty_dir: GoogleCloudRunV2InstanceVolumesEmptyDir
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a>

empty_dir block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#empty_dir GoogleCloudRunV2Instance#empty_dir}

---

##### `gcs`<sup>Optional</sup> <a name="gcs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.gcs"></a>

```python
gcs: GoogleCloudRunV2InstanceVolumesGcs
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a>

gcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#gcs GoogleCloudRunV2Instance#gcs}

---

##### `nfs`<sup>Optional</sup> <a name="nfs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.nfs"></a>

```python
nfs: GoogleCloudRunV2InstanceVolumesNfs
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a>

nfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#nfs GoogleCloudRunV2Instance#nfs}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.secret"></a>

```python
secret: GoogleCloudRunV2InstanceVolumesSecret
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#secret GoogleCloudRunV2Instance#secret}

---

### GoogleCloudRunV2InstanceVolumesCloudSqlInstance <a name="GoogleCloudRunV2InstanceVolumesCloudSqlInstance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance(
  instances: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance.property.instances">instances</a></code> | <code>typing.List[str]</code> | The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}. |

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance.property.instances"></a>

```python
instances: typing.List[str]
```

- *Type:* typing.List[str]

The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#instances GoogleCloudRunV2Instance#instances}

---

### GoogleCloudRunV2InstanceVolumesEmptyDir <a name="GoogleCloudRunV2InstanceVolumesEmptyDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir(
  medium: str = None,
  size_limit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir.property.medium">medium</a></code> | <code>str</code> | The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY", "DISK"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir.property.sizeLimit">size_limit</a></code> | <code>str</code> | Limit on the storage usable by this EmptyDir volume. |

---

##### `medium`<sup>Optional</sup> <a name="medium" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir.property.medium"></a>

```python
medium: str
```

- *Type:* str

The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY", "DISK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#medium GoogleCloudRunV2Instance#medium}

---

##### `size_limit`<sup>Optional</sup> <a name="size_limit" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir.property.sizeLimit"></a>

```python
size_limit: str
```

- *Type:* str

Limit on the storage usable by this EmptyDir volume.

The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. This field's values are of the 'Quantity' k8s type: https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#size_limit GoogleCloudRunV2Instance#size_limit}

---

### GoogleCloudRunV2InstanceVolumesGcs <a name="GoogleCloudRunV2InstanceVolumesGcs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs(
  bucket: str,
  mount_options: typing.List[str] = None,
  read_only: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.bucket">bucket</a></code> | <code>str</code> | GCS Bucket name. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.mountOptions">mount_options</a></code> | <code>typing.List[str]</code> | A list of flags to pass to the gcsfuse command for configuring this volume. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.readOnly">read_only</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, mount the GCS bucket as read-only. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

GCS Bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#bucket GoogleCloudRunV2Instance#bucket}

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.mountOptions"></a>

```python
mount_options: typing.List[str]
```

- *Type:* typing.List[str]

A list of flags to pass to the gcsfuse command for configuring this volume.

Flags should be passed without leading dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#mount_options GoogleCloudRunV2Instance#mount_options}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.readOnly"></a>

```python
read_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, mount the GCS bucket as read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#read_only GoogleCloudRunV2Instance#read_only}

---

### GoogleCloudRunV2InstanceVolumesNfs <a name="GoogleCloudRunV2InstanceVolumesNfs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs(
  path: str,
  server: str,
  read_only: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.path">path</a></code> | <code>str</code> | Path that is exported by the NFS server. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.server">server</a></code> | <code>str</code> | Hostname or IP address of the NFS server. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.readOnly">read_only</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, mount the NFS volume as read only. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.path"></a>

```python
path: str
```

- *Type:* str

Path that is exported by the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#path GoogleCloudRunV2Instance#path}

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.server"></a>

```python
server: str
```

- *Type:* str

Hostname or IP address of the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#server GoogleCloudRunV2Instance#server}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.readOnly"></a>

```python
read_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, mount the NFS volume as read only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#read_only GoogleCloudRunV2Instance#read_only}

---

### GoogleCloudRunV2InstanceVolumesSecret <a name="GoogleCloudRunV2InstanceVolumesSecret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret(
  secret: str,
  default_mode: typing.Union[int, float] = None,
  items: IResolvable | typing.List[GoogleCloudRunV2InstanceVolumesSecretItems] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.secret">secret</a></code> | <code>str</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.defaultMode">default_mode</a></code> | <code>typing.Union[int, float]</code> | Integer representation of mode bits to use on created files by default. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.items">items</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>]</code> | items block. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.secret"></a>

```python
secret: str
```

- *Type:* str

The name of the secret in Cloud Secret Manager.

Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#secret GoogleCloudRunV2Instance#secret}

---

##### `default_mode`<sup>Optional</sup> <a name="default_mode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.defaultMode"></a>

```python
default_mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Integer representation of mode bits to use on created files by default.

Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#default_mode GoogleCloudRunV2Instance#default_mode}

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.items"></a>

```python
items: IResolvable | typing.List[GoogleCloudRunV2InstanceVolumesSecretItems]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#items GoogleCloudRunV2Instance#items}

---

### GoogleCloudRunV2InstanceVolumesSecretItems <a name="GoogleCloudRunV2InstanceVolumesSecretItems" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems(
  path: str,
  mode: typing.Union[int, float] = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.path">path</a></code> | <code>str</code> | The relative path of the secret in the container. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.mode">mode</a></code> | <code>typing.Union[int, float]</code> | Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.version">version</a></code> | <code>str</code> | The Cloud Secret Manager secret version. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.path"></a>

```python
path: str
```

- *Type:* str

The relative path of the secret in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#path GoogleCloudRunV2Instance#path}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.mode"></a>

```python
mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal).

If 0 or not set, the Volume's default mode will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#mode GoogleCloudRunV2Instance#mode}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.version"></a>

```python
version: str
```

- *Type:* str

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#version GoogleCloudRunV2Instance#version}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudRunV2InstanceConditionsList <a name="GoogleCloudRunV2InstanceConditionsList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudRunV2InstanceConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleCloudRunV2InstanceConditionsOutputReference <a name="GoogleCloudRunV2InstanceConditionsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.instanceReason">instance_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.lastTransitionTime">last_transition_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditions">GoogleCloudRunV2InstanceConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_reason`<sup>Required</sup> <a name="instance_reason" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.instanceReason"></a>

```python
instance_reason: str
```

- *Type:* str

---

##### `last_transition_time`<sup>Required</sup> <a name="last_transition_time" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.lastTransitionTime"></a>

```python
last_transition_time: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudRunV2InstanceConditions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditions">GoogleCloudRunV2InstanceConditions</a>

---


### GoogleCloudRunV2InstanceContainersEnvList <a name="GoogleCloudRunV2InstanceContainersEnvList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudRunV2InstanceContainersEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersEnv]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>]

---


### GoogleCloudRunV2InstanceContainersEnvOutputReference <a name="GoogleCloudRunV2InstanceContainersEnvOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.putValueSource">put_value_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resetValueSource">reset_value_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value_source` <a name="put_value_source" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.putValueSource"></a>

```python
def put_value_source(
  secret_key_ref: GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef = None
) -> None
```

###### `secret_key_ref`<sup>Optional</sup> <a name="secret_key_ref" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.putValueSource.parameter.secretKeyRef"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#secret_key_ref GoogleCloudRunV2Instance#secret_key_ref}

---

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_value_source` <a name="reset_value_source" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resetValueSource"></a>

```python
def reset_value_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueSource">value_source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference">GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueSourceInput">value_source_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_source`<sup>Required</sup> <a name="value_source" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueSource"></a>

```python
value_source: GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference">GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value_source_input`<sup>Optional</sup> <a name="value_source_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueSourceInput"></a>

```python
value_source_input: GoogleCloudRunV2InstanceContainersEnvValueSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCloudRunV2InstanceContainersEnv
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>

---


### GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference <a name="GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.putSecretKeyRef">put_secret_key_ref</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.resetSecretKeyRef">reset_secret_key_ref</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_secret_key_ref` <a name="put_secret_key_ref" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.putSecretKeyRef"></a>

```python
def put_secret_key_ref(
  secret: str,
  version: str
) -> None
```

###### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.putSecretKeyRef.parameter.secret"></a>

- *Type:* str

The name of the secret in Cloud Secret Manager.

Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#secret GoogleCloudRunV2Instance#secret}

---

###### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.putSecretKeyRef.parameter.version"></a>

- *Type:* str

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#version GoogleCloudRunV2Instance#version}

---

##### `reset_secret_key_ref` <a name="reset_secret_key_ref" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.resetSecretKeyRef"></a>

```python
def reset_secret_key_ref() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.secretKeyRef">secret_key_ref</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.secretKeyRefInput">secret_key_ref_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_key_ref`<sup>Required</sup> <a name="secret_key_ref" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.secretKeyRef"></a>

```python
secret_key_ref: GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference</a>

---

##### `secret_key_ref_input`<sup>Optional</sup> <a name="secret_key_ref_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.secretKeyRefInput"></a>

```python
secret_key_ref_input: GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudRunV2InstanceContainersEnvValueSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a>

---


### GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference <a name="GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a>

---


### GoogleCloudRunV2InstanceContainersList <a name="GoogleCloudRunV2InstanceContainersList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudRunV2InstanceContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCloudRunV2InstanceContainers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>]

---


### GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference <a name="GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resetService">reset_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resetService"></a>

```python
def reset_service() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudRunV2InstanceContainersLivenessProbeGrpc
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a>

---


### GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList <a name="GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>]

---


### GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference <a name="GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>

---


### GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference <a name="GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.putHttpHeaders">put_http_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders">reset_http_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_http_headers` <a name="put_http_headers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.putHttpHeaders"></a>

```python
def put_http_headers(
  value: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>]

---

##### `reset_http_headers` <a name="reset_http_headers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders"></a>

```python
def reset_http_headers() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.httpHeaders">http_headers</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput">http_headers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_headers`<sup>Required</sup> <a name="http_headers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.httpHeaders"></a>

```python
http_headers: GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList</a>

---

##### `http_headers_input`<sup>Optional</sup> <a name="http_headers_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```python
http_headers_input: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a>

---


### GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference <a name="GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putGrpc">put_grpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putHttpGet">put_http_get</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetFailureThreshold">reset_failure_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetGrpc">reset_grpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetHttpGet">reset_http_get</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetInitialDelaySeconds">reset_initial_delay_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetPeriodSeconds">reset_period_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetTimeoutSeconds">reset_timeout_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_grpc` <a name="put_grpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putGrpc"></a>

```python
def put_grpc(
  port: typing.Union[int, float] = None,
  service: str = None
) -> None
```

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putGrpc.parameter.port"></a>

- *Type:* typing.Union[int, float]

Optional.

Port number of the gRPC service. Number must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

###### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putGrpc.parameter.service"></a>

- *Type:* str

Optional.

Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md ). If this is not specified, the default behavior is defined by gRPC

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#service GoogleCloudRunV2Instance#service}

---

##### `put_http_get` <a name="put_http_get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putHttpGet"></a>

```python
def put_http_get(
  http_headers: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders] = None,
  path: str = None,
  port: typing.Union[int, float] = None
) -> None
```

###### `http_headers`<sup>Optional</sup> <a name="http_headers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putHttpGet.parameter.httpHeaders"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>]

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#http_headers GoogleCloudRunV2Instance#http_headers}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putHttpGet.parameter.path"></a>

- *Type:* str

Optional. Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#path GoogleCloudRunV2Instance#path}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putHttpGet.parameter.port"></a>

- *Type:* typing.Union[int, float]

Optional.

Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

##### `reset_failure_threshold` <a name="reset_failure_threshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetFailureThreshold"></a>

```python
def reset_failure_threshold() -> None
```

##### `reset_grpc` <a name="reset_grpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetGrpc"></a>

```python
def reset_grpc() -> None
```

##### `reset_http_get` <a name="reset_http_get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetHttpGet"></a>

```python
def reset_http_get() -> None
```

##### `reset_initial_delay_seconds` <a name="reset_initial_delay_seconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetInitialDelaySeconds"></a>

```python
def reset_initial_delay_seconds() -> None
```

##### `reset_period_seconds` <a name="reset_period_seconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetPeriodSeconds"></a>

```python
def reset_period_seconds() -> None
```

##### `reset_timeout_seconds` <a name="reset_timeout_seconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetTimeoutSeconds"></a>

```python
def reset_timeout_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.grpc">grpc</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.httpGet">http_get</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.failureThresholdInput">failure_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.grpcInput">grpc_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.httpGetInput">http_get_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.initialDelaySecondsInput">initial_delay_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.periodSecondsInput">period_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.timeoutSecondsInput">timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.initialDelaySeconds">initial_delay_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.periodSeconds">period_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grpc`<sup>Required</sup> <a name="grpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.grpc"></a>

```python
grpc: GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference</a>

---

##### `http_get`<sup>Required</sup> <a name="http_get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.httpGet"></a>

```python
http_get: GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference</a>

---

##### `failure_threshold_input`<sup>Optional</sup> <a name="failure_threshold_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.failureThresholdInput"></a>

```python
failure_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `grpc_input`<sup>Optional</sup> <a name="grpc_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.grpcInput"></a>

```python
grpc_input: GoogleCloudRunV2InstanceContainersLivenessProbeGrpc
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a>

---

##### `http_get_input`<sup>Optional</sup> <a name="http_get_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.httpGetInput"></a>

```python
http_get_input: GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a>

---

##### `initial_delay_seconds_input`<sup>Optional</sup> <a name="initial_delay_seconds_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.initialDelaySecondsInput"></a>

```python
initial_delay_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_seconds_input`<sup>Optional</sup> <a name="period_seconds_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.periodSecondsInput"></a>

```python
period_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_seconds_input`<sup>Optional</sup> <a name="timeout_seconds_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.timeoutSecondsInput"></a>

```python
timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `initial_delay_seconds`<sup>Required</sup> <a name="initial_delay_seconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.initialDelaySeconds"></a>

```python
initial_delay_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_seconds`<sup>Required</sup> <a name="period_seconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.periodSeconds"></a>

```python
period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudRunV2InstanceContainersLivenessProbe
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a>

---


### GoogleCloudRunV2InstanceContainersOutputReference <a name="GoogleCloudRunV2InstanceContainersOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putEnv">put_env</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putLivenessProbe">put_liveness_probe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putPorts">put_ports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putResources">put_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putStartupProbe">put_startup_probe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putVolumeMounts">put_volume_mounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetEnv">reset_env</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetLivenessProbe">reset_liveness_probe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetPorts">reset_ports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetResources">reset_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetStartupProbe">reset_startup_probe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetVolumeMounts">reset_volume_mounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetWorkingDir">reset_working_dir</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_env` <a name="put_env" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putEnv"></a>

```python
def put_env(
  value: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersEnv]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putEnv.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>]

---

##### `put_liveness_probe` <a name="put_liveness_probe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putLivenessProbe"></a>

```python
def put_liveness_probe(
  failure_threshold: typing.Union[int, float] = None,
  grpc: GoogleCloudRunV2InstanceContainersLivenessProbeGrpc = None,
  http_get: GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet = None,
  initial_delay_seconds: typing.Union[int, float] = None,
  period_seconds: typing.Union[int, float] = None,
  timeout_seconds: typing.Union[int, float] = None
) -> None
```

###### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putLivenessProbe.parameter.failureThreshold"></a>

- *Type:* typing.Union[int, float]

Optional.

Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#failure_threshold GoogleCloudRunV2Instance#failure_threshold}

---

###### `grpc`<sup>Optional</sup> <a name="grpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putLivenessProbe.parameter.grpc"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#grpc GoogleCloudRunV2Instance#grpc}

---

###### `http_get`<sup>Optional</sup> <a name="http_get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putLivenessProbe.parameter.httpGet"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#http_get GoogleCloudRunV2Instance#http_get}

---

###### `initial_delay_seconds`<sup>Optional</sup> <a name="initial_delay_seconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putLivenessProbe.parameter.initialDelaySeconds"></a>

- *Type:* typing.Union[int, float]

Optional.

Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#initial_delay_seconds GoogleCloudRunV2Instance#initial_delay_seconds}

---

###### `period_seconds`<sup>Optional</sup> <a name="period_seconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putLivenessProbe.parameter.periodSeconds"></a>

- *Type:* typing.Union[int, float]

Optional.

How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#period_seconds GoogleCloudRunV2Instance#period_seconds}

---

###### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putLivenessProbe.parameter.timeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Optional.

Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#timeout_seconds GoogleCloudRunV2Instance#timeout_seconds}

---

##### `put_ports` <a name="put_ports" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putPorts"></a>

```python
def put_ports(
  value: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersPorts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putPorts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>]

---

##### `put_resources` <a name="put_resources" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putResources"></a>

```python
def put_resources(
  limits: typing.Mapping[str] = None
) -> None
```

###### `limits`<sup>Optional</sup> <a name="limits" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putResources.parameter.limits"></a>

- *Type:* typing.Mapping[str]

Only memory and CPU are supported.

Use key 'cpu' for CPU limit, 'memory' for memory limit. Note: The only supported values for CPU are '1', '2', '4', '6', and '8'. Setting 4 CPU requires at least 2Gi of memory, setting 6 or more CPU requires at least 4Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#limits GoogleCloudRunV2Instance#limits}

---

##### `put_startup_probe` <a name="put_startup_probe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putStartupProbe"></a>

```python
def put_startup_probe(
  failure_threshold: typing.Union[int, float] = None,
  grpc: GoogleCloudRunV2InstanceContainersStartupProbeGrpc = None,
  http_get: GoogleCloudRunV2InstanceContainersStartupProbeHttpGet = None,
  initial_delay_seconds: typing.Union[int, float] = None,
  period_seconds: typing.Union[int, float] = None,
  tcp_socket: GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket = None,
  timeout_seconds: typing.Union[int, float] = None
) -> None
```

###### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putStartupProbe.parameter.failureThreshold"></a>

- *Type:* typing.Union[int, float]

Optional.

Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#failure_threshold GoogleCloudRunV2Instance#failure_threshold}

---

###### `grpc`<sup>Optional</sup> <a name="grpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putStartupProbe.parameter.grpc"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#grpc GoogleCloudRunV2Instance#grpc}

---

###### `http_get`<sup>Optional</sup> <a name="http_get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putStartupProbe.parameter.httpGet"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#http_get GoogleCloudRunV2Instance#http_get}

---

###### `initial_delay_seconds`<sup>Optional</sup> <a name="initial_delay_seconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putStartupProbe.parameter.initialDelaySeconds"></a>

- *Type:* typing.Union[int, float]

Optional.

Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#initial_delay_seconds GoogleCloudRunV2Instance#initial_delay_seconds}

---

###### `period_seconds`<sup>Optional</sup> <a name="period_seconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putStartupProbe.parameter.periodSeconds"></a>

- *Type:* typing.Union[int, float]

Optional.

How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#period_seconds GoogleCloudRunV2Instance#period_seconds}

---

###### `tcp_socket`<sup>Optional</sup> <a name="tcp_socket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putStartupProbe.parameter.tcpSocket"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a>

tcp_socket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#tcp_socket GoogleCloudRunV2Instance#tcp_socket}

---

###### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putStartupProbe.parameter.timeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Optional.

Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#timeout_seconds GoogleCloudRunV2Instance#timeout_seconds}

---

##### `put_volume_mounts` <a name="put_volume_mounts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putVolumeMounts"></a>

```python
def put_volume_mounts(
  value: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersVolumeMounts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>]

---

##### `reset_args` <a name="reset_args" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_command` <a name="reset_command" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_env` <a name="reset_env" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetEnv"></a>

```python
def reset_env() -> None
```

##### `reset_liveness_probe` <a name="reset_liveness_probe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetLivenessProbe"></a>

```python
def reset_liveness_probe() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_ports` <a name="reset_ports" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```

##### `reset_startup_probe` <a name="reset_startup_probe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetStartupProbe"></a>

```python
def reset_startup_probe() -> None
```

##### `reset_volume_mounts` <a name="reset_volume_mounts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetVolumeMounts"></a>

```python
def reset_volume_mounts() -> None
```

##### `reset_working_dir` <a name="reset_working_dir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetWorkingDir"></a>

```python
def reset_working_dir() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.env">env</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList">GoogleCloudRunV2InstanceContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.livenessProbe">liveness_probe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList">GoogleCloudRunV2InstanceContainersPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference">GoogleCloudRunV2InstanceContainersResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.startupProbe">startup_probe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.volumeMounts">volume_mounts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList">GoogleCloudRunV2InstanceContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.envInput">env_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.livenessProbeInput">liveness_probe_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.portsInput">ports_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.resourcesInput">resources_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.startupProbeInput">startup_probe_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.volumeMountsInput">volume_mounts_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.workingDirInput">working_dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.workingDir">working_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.env"></a>

```python
env: GoogleCloudRunV2InstanceContainersEnvList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList">GoogleCloudRunV2InstanceContainersEnvList</a>

---

##### `liveness_probe`<sup>Required</sup> <a name="liveness_probe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.livenessProbe"></a>

```python
liveness_probe: GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference</a>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.ports"></a>

```python
ports: GoogleCloudRunV2InstanceContainersPortsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList">GoogleCloudRunV2InstanceContainersPortsList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.resources"></a>

```python
resources: GoogleCloudRunV2InstanceContainersResourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference">GoogleCloudRunV2InstanceContainersResourcesOutputReference</a>

---

##### `startup_probe`<sup>Required</sup> <a name="startup_probe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.startupProbe"></a>

```python
startup_probe: GoogleCloudRunV2InstanceContainersStartupProbeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeOutputReference</a>

---

##### `volume_mounts`<sup>Required</sup> <a name="volume_mounts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.volumeMounts"></a>

```python
volume_mounts: GoogleCloudRunV2InstanceContainersVolumeMountsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList">GoogleCloudRunV2InstanceContainersVolumeMountsList</a>

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.envInput"></a>

```python
env_input: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersEnv]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>]

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `liveness_probe_input`<sup>Optional</sup> <a name="liveness_probe_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.livenessProbeInput"></a>

```python
liveness_probe_input: GoogleCloudRunV2InstanceContainersLivenessProbe
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.portsInput"></a>

```python
ports_input: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersPorts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.resourcesInput"></a>

```python
resources_input: GoogleCloudRunV2InstanceContainersResources
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a>

---

##### `startup_probe_input`<sup>Optional</sup> <a name="startup_probe_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.startupProbeInput"></a>

```python
startup_probe_input: GoogleCloudRunV2InstanceContainersStartupProbe
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a>

---

##### `volume_mounts_input`<sup>Optional</sup> <a name="volume_mounts_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.volumeMountsInput"></a>

```python
volume_mounts_input: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersVolumeMounts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>]

---

##### `working_dir_input`<sup>Optional</sup> <a name="working_dir_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.workingDirInput"></a>

```python
working_dir_input: str
```

- *Type:* str

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `working_dir`<sup>Required</sup> <a name="working_dir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.workingDir"></a>

```python
working_dir: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCloudRunV2InstanceContainers
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>

---


### GoogleCloudRunV2InstanceContainersPortsList <a name="GoogleCloudRunV2InstanceContainersPortsList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudRunV2InstanceContainersPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersPorts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>]

---


### GoogleCloudRunV2InstanceContainersPortsOutputReference <a name="GoogleCloudRunV2InstanceContainersPortsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resetContainerPort">reset_container_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_container_port` <a name="reset_container_port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resetContainerPort"></a>

```python
def reset_container_port() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.containerPortInput">container_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.containerPort">container_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_port_input`<sup>Optional</sup> <a name="container_port_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.containerPortInput"></a>

```python
container_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `container_port`<sup>Required</sup> <a name="container_port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.containerPort"></a>

```python
container_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCloudRunV2InstanceContainersPorts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>

---


### GoogleCloudRunV2InstanceContainersResourcesOutputReference <a name="GoogleCloudRunV2InstanceContainersResourcesOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.resetLimits">reset_limits</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_limits` <a name="reset_limits" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.resetLimits"></a>

```python
def reset_limits() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.limitsInput">limits_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.limits">limits</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `limits_input`<sup>Optional</sup> <a name="limits_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.limitsInput"></a>

```python
limits_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.limits"></a>

```python
limits: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudRunV2InstanceContainersResources
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a>

---


### GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference <a name="GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resetService">reset_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resetService"></a>

```python
def reset_service() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudRunV2InstanceContainersStartupProbeGrpc
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a>

---


### GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList <a name="GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>]

---


### GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference <a name="GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>

---


### GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference <a name="GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.putHttpHeaders">put_http_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetHttpHeaders">reset_http_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_http_headers` <a name="put_http_headers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.putHttpHeaders"></a>

```python
def put_http_headers(
  value: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>]

---

##### `reset_http_headers` <a name="reset_http_headers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetHttpHeaders"></a>

```python
def reset_http_headers() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.httpHeaders">http_headers</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput">http_headers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_headers`<sup>Required</sup> <a name="http_headers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.httpHeaders"></a>

```python
http_headers: GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList</a>

---

##### `http_headers_input`<sup>Optional</sup> <a name="http_headers_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```python
http_headers_input: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudRunV2InstanceContainersStartupProbeHttpGet
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a>

---


### GoogleCloudRunV2InstanceContainersStartupProbeOutputReference <a name="GoogleCloudRunV2InstanceContainersStartupProbeOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putGrpc">put_grpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putHttpGet">put_http_get</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putTcpSocket">put_tcp_socket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetFailureThreshold">reset_failure_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetGrpc">reset_grpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetHttpGet">reset_http_get</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetInitialDelaySeconds">reset_initial_delay_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetPeriodSeconds">reset_period_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetTcpSocket">reset_tcp_socket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetTimeoutSeconds">reset_timeout_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_grpc` <a name="put_grpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putGrpc"></a>

```python
def put_grpc(
  port: typing.Union[int, float] = None,
  service: str = None
) -> None
```

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putGrpc.parameter.port"></a>

- *Type:* typing.Union[int, float]

Optional.

Port number of the gRPC service. Number must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

###### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putGrpc.parameter.service"></a>

- *Type:* str

Optional.

Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md ). If this is not specified, the default behavior is defined by gRPC

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#service GoogleCloudRunV2Instance#service}

---

##### `put_http_get` <a name="put_http_get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putHttpGet"></a>

```python
def put_http_get(
  http_headers: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders] = None,
  path: str = None,
  port: typing.Union[int, float] = None
) -> None
```

###### `http_headers`<sup>Optional</sup> <a name="http_headers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putHttpGet.parameter.httpHeaders"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>]

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#http_headers GoogleCloudRunV2Instance#http_headers}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putHttpGet.parameter.path"></a>

- *Type:* str

Optional. Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#path GoogleCloudRunV2Instance#path}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putHttpGet.parameter.port"></a>

- *Type:* typing.Union[int, float]

Optional.

Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

##### `put_tcp_socket` <a name="put_tcp_socket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putTcpSocket"></a>

```python
def put_tcp_socket(
  port: typing.Union[int, float] = None
) -> None
```

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putTcpSocket.parameter.port"></a>

- *Type:* typing.Union[int, float]

Optional.

Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

##### `reset_failure_threshold` <a name="reset_failure_threshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetFailureThreshold"></a>

```python
def reset_failure_threshold() -> None
```

##### `reset_grpc` <a name="reset_grpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetGrpc"></a>

```python
def reset_grpc() -> None
```

##### `reset_http_get` <a name="reset_http_get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetHttpGet"></a>

```python
def reset_http_get() -> None
```

##### `reset_initial_delay_seconds` <a name="reset_initial_delay_seconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetInitialDelaySeconds"></a>

```python
def reset_initial_delay_seconds() -> None
```

##### `reset_period_seconds` <a name="reset_period_seconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetPeriodSeconds"></a>

```python
def reset_period_seconds() -> None
```

##### `reset_tcp_socket` <a name="reset_tcp_socket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetTcpSocket"></a>

```python
def reset_tcp_socket() -> None
```

##### `reset_timeout_seconds` <a name="reset_timeout_seconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetTimeoutSeconds"></a>

```python
def reset_timeout_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.grpc">grpc</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.httpGet">http_get</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.tcpSocket">tcp_socket</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.failureThresholdInput">failure_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.grpcInput">grpc_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.httpGetInput">http_get_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.initialDelaySecondsInput">initial_delay_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.periodSecondsInput">period_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.tcpSocketInput">tcp_socket_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.timeoutSecondsInput">timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.initialDelaySeconds">initial_delay_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.periodSeconds">period_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grpc`<sup>Required</sup> <a name="grpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.grpc"></a>

```python
grpc: GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference</a>

---

##### `http_get`<sup>Required</sup> <a name="http_get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.httpGet"></a>

```python
http_get: GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference</a>

---

##### `tcp_socket`<sup>Required</sup> <a name="tcp_socket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.tcpSocket"></a>

```python
tcp_socket: GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference</a>

---

##### `failure_threshold_input`<sup>Optional</sup> <a name="failure_threshold_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.failureThresholdInput"></a>

```python
failure_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `grpc_input`<sup>Optional</sup> <a name="grpc_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.grpcInput"></a>

```python
grpc_input: GoogleCloudRunV2InstanceContainersStartupProbeGrpc
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a>

---

##### `http_get_input`<sup>Optional</sup> <a name="http_get_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.httpGetInput"></a>

```python
http_get_input: GoogleCloudRunV2InstanceContainersStartupProbeHttpGet
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a>

---

##### `initial_delay_seconds_input`<sup>Optional</sup> <a name="initial_delay_seconds_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.initialDelaySecondsInput"></a>

```python
initial_delay_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_seconds_input`<sup>Optional</sup> <a name="period_seconds_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.periodSecondsInput"></a>

```python
period_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tcp_socket_input`<sup>Optional</sup> <a name="tcp_socket_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.tcpSocketInput"></a>

```python
tcp_socket_input: GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a>

---

##### `timeout_seconds_input`<sup>Optional</sup> <a name="timeout_seconds_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.timeoutSecondsInput"></a>

```python
timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `initial_delay_seconds`<sup>Required</sup> <a name="initial_delay_seconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.initialDelaySeconds"></a>

```python
initial_delay_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_seconds`<sup>Required</sup> <a name="period_seconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.periodSeconds"></a>

```python
period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudRunV2InstanceContainersStartupProbe
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a>

---


### GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference <a name="GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a>

---


### GoogleCloudRunV2InstanceContainerStatusesList <a name="GoogleCloudRunV2InstanceContainerStatusesList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudRunV2InstanceContainerStatusesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleCloudRunV2InstanceContainerStatusesOutputReference <a name="GoogleCloudRunV2InstanceContainerStatusesOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.imageDigest">image_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatuses">GoogleCloudRunV2InstanceContainerStatuses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_digest`<sup>Required</sup> <a name="image_digest" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.imageDigest"></a>

```python
image_digest: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudRunV2InstanceContainerStatuses
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatuses">GoogleCloudRunV2InstanceContainerStatuses</a>

---


### GoogleCloudRunV2InstanceContainersVolumeMountsList <a name="GoogleCloudRunV2InstanceContainersVolumeMountsList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCloudRunV2InstanceContainersVolumeMounts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>]

---


### GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference <a name="GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.resetSubPath">reset_sub_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_sub_path` <a name="reset_sub_path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.resetSubPath"></a>

```python
def reset_sub_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.mountPathInput">mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.subPathInput">sub_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.subPath">sub_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mount_path_input`<sup>Optional</sup> <a name="mount_path_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```python
mount_path_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `sub_path_input`<sup>Optional</sup> <a name="sub_path_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.subPathInput"></a>

```python
sub_path_input: str
```

- *Type:* str

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sub_path`<sup>Required</sup> <a name="sub_path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.subPath"></a>

```python
sub_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCloudRunV2InstanceContainersVolumeMounts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>

---


### GoogleCloudRunV2InstanceTerminalConditionList <a name="GoogleCloudRunV2InstanceTerminalConditionList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudRunV2InstanceTerminalConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleCloudRunV2InstanceTerminalConditionOutputReference <a name="GoogleCloudRunV2InstanceTerminalConditionOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.instanceReason">instance_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.lastTransitionTime">last_transition_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalCondition">GoogleCloudRunV2InstanceTerminalCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_reason`<sup>Required</sup> <a name="instance_reason" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.instanceReason"></a>

```python
instance_reason: str
```

- *Type:* str

---

##### `last_transition_time`<sup>Required</sup> <a name="last_transition_time" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.lastTransitionTime"></a>

```python
last_transition_time: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudRunV2InstanceTerminalCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalCondition">GoogleCloudRunV2InstanceTerminalCondition</a>

---


### GoogleCloudRunV2InstanceTimeoutsOutputReference <a name="GoogleCloudRunV2InstanceTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCloudRunV2InstanceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a>

---


### GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference <a name="GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resetInstances">reset_instances</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instances` <a name="reset_instances" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resetInstances"></a>

```python
def reset_instances() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.instancesInput">instances_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.instances">instances</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instances_input`<sup>Optional</sup> <a name="instances_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.instancesInput"></a>

```python
instances_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.instances"></a>

```python
instances: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudRunV2InstanceVolumesCloudSqlInstance
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a>

---


### GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference <a name="GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resetMedium">reset_medium</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resetSizeLimit">reset_size_limit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_medium` <a name="reset_medium" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resetMedium"></a>

```python
def reset_medium() -> None
```

##### `reset_size_limit` <a name="reset_size_limit" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resetSizeLimit"></a>

```python
def reset_size_limit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.mediumInput">medium_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.sizeLimitInput">size_limit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.medium">medium</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.sizeLimit">size_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `medium_input`<sup>Optional</sup> <a name="medium_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.mediumInput"></a>

```python
medium_input: str
```

- *Type:* str

---

##### `size_limit_input`<sup>Optional</sup> <a name="size_limit_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.sizeLimitInput"></a>

```python
size_limit_input: str
```

- *Type:* str

---

##### `medium`<sup>Required</sup> <a name="medium" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.medium"></a>

```python
medium: str
```

- *Type:* str

---

##### `size_limit`<sup>Required</sup> <a name="size_limit" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.sizeLimit"></a>

```python
size_limit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudRunV2InstanceVolumesEmptyDir
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a>

---


### GoogleCloudRunV2InstanceVolumesGcsOutputReference <a name="GoogleCloudRunV2InstanceVolumesGcsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resetMountOptions">reset_mount_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mount_options` <a name="reset_mount_options" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resetMountOptions"></a>

```python
def reset_mount_options() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.mountOptionsInput">mount_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.mountOptions">mount_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.readOnly">read_only</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `mount_options_input`<sup>Optional</sup> <a name="mount_options_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.mountOptionsInput"></a>

```python
mount_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.readOnlyInput"></a>

```python
read_only_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.mountOptions"></a>

```python
mount_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.readOnly"></a>

```python
read_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudRunV2InstanceVolumesGcs
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a>

---


### GoogleCloudRunV2InstanceVolumesList <a name="GoogleCloudRunV2InstanceVolumesList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudRunV2InstanceVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCloudRunV2InstanceVolumes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>]

---


### GoogleCloudRunV2InstanceVolumesNfsOutputReference <a name="GoogleCloudRunV2InstanceVolumesNfsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read_only` <a name="reset_read_only" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.serverInput">server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.readOnly">read_only</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.readOnlyInput"></a>

```python
read_only_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.serverInput"></a>

```python
server_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.readOnly"></a>

```python
read_only: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudRunV2InstanceVolumesNfs
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a>

---


### GoogleCloudRunV2InstanceVolumesOutputReference <a name="GoogleCloudRunV2InstanceVolumesOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putCloudSqlInstance">put_cloud_sql_instance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putEmptyDir">put_empty_dir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putGcs">put_gcs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putNfs">put_nfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putSecret">put_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetCloudSqlInstance">reset_cloud_sql_instance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetEmptyDir">reset_empty_dir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetGcs">reset_gcs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetNfs">reset_nfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetSecret">reset_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloud_sql_instance` <a name="put_cloud_sql_instance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putCloudSqlInstance"></a>

```python
def put_cloud_sql_instance(
  instances: typing.List[str] = None
) -> None
```

###### `instances`<sup>Optional</sup> <a name="instances" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putCloudSqlInstance.parameter.instances"></a>

- *Type:* typing.List[str]

The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#instances GoogleCloudRunV2Instance#instances}

---

##### `put_empty_dir` <a name="put_empty_dir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putEmptyDir"></a>

```python
def put_empty_dir(
  medium: str = None,
  size_limit: str = None
) -> None
```

###### `medium`<sup>Optional</sup> <a name="medium" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putEmptyDir.parameter.medium"></a>

- *Type:* str

The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY", "DISK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#medium GoogleCloudRunV2Instance#medium}

---

###### `size_limit`<sup>Optional</sup> <a name="size_limit" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putEmptyDir.parameter.sizeLimit"></a>

- *Type:* str

Limit on the storage usable by this EmptyDir volume.

The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. This field's values are of the 'Quantity' k8s type: https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#size_limit GoogleCloudRunV2Instance#size_limit}

---

##### `put_gcs` <a name="put_gcs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putGcs"></a>

```python
def put_gcs(
  bucket: str,
  mount_options: typing.List[str] = None,
  read_only: bool | IResolvable = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putGcs.parameter.bucket"></a>

- *Type:* str

GCS Bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#bucket GoogleCloudRunV2Instance#bucket}

---

###### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putGcs.parameter.mountOptions"></a>

- *Type:* typing.List[str]

A list of flags to pass to the gcsfuse command for configuring this volume.

Flags should be passed without leading dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#mount_options GoogleCloudRunV2Instance#mount_options}

---

###### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putGcs.parameter.readOnly"></a>

- *Type:* bool | cdktn.IResolvable

If true, mount the GCS bucket as read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#read_only GoogleCloudRunV2Instance#read_only}

---

##### `put_nfs` <a name="put_nfs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putNfs"></a>

```python
def put_nfs(
  path: str,
  server: str,
  read_only: bool | IResolvable = None
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putNfs.parameter.path"></a>

- *Type:* str

Path that is exported by the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#path GoogleCloudRunV2Instance#path}

---

###### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putNfs.parameter.server"></a>

- *Type:* str

Hostname or IP address of the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#server GoogleCloudRunV2Instance#server}

---

###### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putNfs.parameter.readOnly"></a>

- *Type:* bool | cdktn.IResolvable

If true, mount the NFS volume as read only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#read_only GoogleCloudRunV2Instance#read_only}

---

##### `put_secret` <a name="put_secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putSecret"></a>

```python
def put_secret(
  secret: str,
  default_mode: typing.Union[int, float] = None,
  items: IResolvable | typing.List[GoogleCloudRunV2InstanceVolumesSecretItems] = None
) -> None
```

###### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putSecret.parameter.secret"></a>

- *Type:* str

The name of the secret in Cloud Secret Manager.

Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#secret GoogleCloudRunV2Instance#secret}

---

###### `default_mode`<sup>Optional</sup> <a name="default_mode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putSecret.parameter.defaultMode"></a>

- *Type:* typing.Union[int, float]

Integer representation of mode bits to use on created files by default.

Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#default_mode GoogleCloudRunV2Instance#default_mode}

---

###### `items`<sup>Optional</sup> <a name="items" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putSecret.parameter.items"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#items GoogleCloudRunV2Instance#items}

---

##### `reset_cloud_sql_instance` <a name="reset_cloud_sql_instance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetCloudSqlInstance"></a>

```python
def reset_cloud_sql_instance() -> None
```

##### `reset_empty_dir` <a name="reset_empty_dir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetEmptyDir"></a>

```python
def reset_empty_dir() -> None
```

##### `reset_gcs` <a name="reset_gcs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetGcs"></a>

```python
def reset_gcs() -> None
```

##### `reset_nfs` <a name="reset_nfs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetNfs"></a>

```python
def reset_nfs() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetSecret"></a>

```python
def reset_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.cloudSqlInstance">cloud_sql_instance</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference">GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.emptyDir">empty_dir</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference">GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.gcs">gcs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference">GoogleCloudRunV2InstanceVolumesGcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference">GoogleCloudRunV2InstanceVolumesNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference">GoogleCloudRunV2InstanceVolumesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.cloudSqlInstanceInput">cloud_sql_instance_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.emptyDirInput">empty_dir_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.gcsInput">gcs_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nfsInput">nfs_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.secretInput">secret_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_sql_instance`<sup>Required</sup> <a name="cloud_sql_instance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.cloudSqlInstance"></a>

```python
cloud_sql_instance: GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference">GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference</a>

---

##### `empty_dir`<sup>Required</sup> <a name="empty_dir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.emptyDir"></a>

```python
empty_dir: GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference">GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference</a>

---

##### `gcs`<sup>Required</sup> <a name="gcs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.gcs"></a>

```python
gcs: GoogleCloudRunV2InstanceVolumesGcsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference">GoogleCloudRunV2InstanceVolumesGcsOutputReference</a>

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nfs"></a>

```python
nfs: GoogleCloudRunV2InstanceVolumesNfsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference">GoogleCloudRunV2InstanceVolumesNfsOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.secret"></a>

```python
secret: GoogleCloudRunV2InstanceVolumesSecretOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference">GoogleCloudRunV2InstanceVolumesSecretOutputReference</a>

---

##### `cloud_sql_instance_input`<sup>Optional</sup> <a name="cloud_sql_instance_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.cloudSqlInstanceInput"></a>

```python
cloud_sql_instance_input: GoogleCloudRunV2InstanceVolumesCloudSqlInstance
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a>

---

##### `empty_dir_input`<sup>Optional</sup> <a name="empty_dir_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.emptyDirInput"></a>

```python
empty_dir_input: GoogleCloudRunV2InstanceVolumesEmptyDir
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a>

---

##### `gcs_input`<sup>Optional</sup> <a name="gcs_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.gcsInput"></a>

```python
gcs_input: GoogleCloudRunV2InstanceVolumesGcs
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nfs_input`<sup>Optional</sup> <a name="nfs_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nfsInput"></a>

```python
nfs_input: GoogleCloudRunV2InstanceVolumesNfs
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a>

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.secretInput"></a>

```python
secret_input: GoogleCloudRunV2InstanceVolumesSecret
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCloudRunV2InstanceVolumes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>

---


### GoogleCloudRunV2InstanceVolumesSecretItemsList <a name="GoogleCloudRunV2InstanceVolumesSecretItemsList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCloudRunV2InstanceVolumesSecretItems]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>]

---


### GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference <a name="GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.modeInput">mode_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.mode">mode</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.modeInput"></a>

```python
mode_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.mode"></a>

```python
mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCloudRunV2InstanceVolumesSecretItems
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>

---


### GoogleCloudRunV2InstanceVolumesSecretOutputReference <a name="GoogleCloudRunV2InstanceVolumesSecretOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_cloud_run_v2_instance

googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.putItems">put_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resetDefaultMode">reset_default_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resetItems">reset_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_items` <a name="put_items" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.putItems"></a>

```python
def put_items(
  value: IResolvable | typing.List[GoogleCloudRunV2InstanceVolumesSecretItems]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.putItems.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>]

---

##### `reset_default_mode` <a name="reset_default_mode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resetDefaultMode"></a>

```python
def reset_default_mode() -> None
```

##### `reset_items` <a name="reset_items" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resetItems"></a>

```python
def reset_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.items">items</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList">GoogleCloudRunV2InstanceVolumesSecretItemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.defaultModeInput">default_mode_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.itemsInput">items_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.defaultMode">default_mode</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.items"></a>

```python
items: GoogleCloudRunV2InstanceVolumesSecretItemsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList">GoogleCloudRunV2InstanceVolumesSecretItemsList</a>

---

##### `default_mode_input`<sup>Optional</sup> <a name="default_mode_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.defaultModeInput"></a>

```python
default_mode_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.itemsInput"></a>

```python
items_input: IResolvable | typing.List[GoogleCloudRunV2InstanceVolumesSecretItems]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>]

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `default_mode`<sup>Required</sup> <a name="default_mode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.defaultMode"></a>

```python
default_mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudRunV2InstanceVolumesSecret
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a>

---



