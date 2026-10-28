# `googleCloudRunV2Instance` Submodule <a name="`googleCloudRunV2Instance` Submodule" id="@cdktn/provider-google-beta.googleCloudRunV2Instance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudRunV2Instance <a name="GoogleCloudRunV2Instance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance google_cloud_run_v2_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2Instance;

GoogleCloudRunV2Instance.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .containers(IResolvable|java.util.List<GoogleCloudRunV2InstanceContainers>)
    .location(java.lang.String)
    .name(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .client(java.lang.String)
//  .clientVersion(java.lang.String)
//  .defaultUriDisabled(java.lang.Boolean|IResolvable)
//  .deletionPolicy(java.lang.String)
//  .encryptionKey(java.lang.String)
//  .encryptionKeyRevocationAction(java.lang.String)
//  .encryptionKeyShutdownDuration(java.lang.String)
//  .id(java.lang.String)
//  .ingress(java.lang.String)
//  .invokerIamDisabled(java.lang.Boolean|IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .launchStage(java.lang.String)
//  .project(java.lang.String)
//  .restartPolicy(java.lang.String)
//  .serviceAccount(java.lang.String)
//  .timeouts(GoogleCloudRunV2InstanceTimeouts)
//  .volumes(IResolvable|java.util.List<GoogleCloudRunV2InstanceVolumes>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.containers">containers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>></code> | containers block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the cloud run instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.client">client</a></code> | <code>java.lang.String</code> | Arbitrary identifier for the API client. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.clientVersion">clientVersion</a></code> | <code>java.lang.String</code> | Arbitrary version identifier for the API client. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.defaultUriDisabled">defaultUriDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disables public resolution of the default URI of this Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.encryptionKey">encryptionKey</a></code> | <code>java.lang.String</code> | A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.encryptionKeyRevocationAction">encryptionKeyRevocationAction</a></code> | <code>java.lang.String</code> | The action to take if the encryption key is revoked. Possible values: ["PREVENT_NEW", "SHUTDOWN"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.encryptionKeyShutdownDuration">encryptionKeyShutdownDuration</a></code> | <code>java.lang.String</code> | If encryptionKeyRevocationAction is SHUTDOWN, the duration before shutting down all instances. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#id GoogleCloudRunV2Instance#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.ingress">ingress</a></code> | <code>java.lang.String</code> | Provides the ingress settings for this Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.invokerIamDisabled">invokerIamDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disables IAM permission check for run.routes.invoke for callers of this Instance. For more information, visit https://cloud.google.com/run/docs/securing/managing-access#invoker_check. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.launchStage">launchStage</a></code> | <code>java.lang.String</code> | The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#project GoogleCloudRunV2Instance#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.restartPolicy">restartPolicy</a></code> | <code>java.lang.String</code> | Restart policy for the Instance. If not provided, the default is ON_FAILURE. Possible values: ["ALWAYS", "ON_FAILURE", "NEVER"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Email address of the IAM service account associated with the Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.volumes">volumes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>></code> | volumes block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.containers"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>>

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#containers GoogleCloudRunV2Instance#containers}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the cloud run instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#location GoogleCloudRunV2Instance#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.
Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected in new resources.
This field follows Kubernetes annotations' namespacing, limits, and rules.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#annotations GoogleCloudRunV2Instance#annotations}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.client"></a>

- *Type:* java.lang.String

Arbitrary identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#client GoogleCloudRunV2Instance#client}

---

##### `clientVersion`<sup>Optional</sup> <a name="clientVersion" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.clientVersion"></a>

- *Type:* java.lang.String

Arbitrary version identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#client_version GoogleCloudRunV2Instance#client_version}

---

##### `defaultUriDisabled`<sup>Optional</sup> <a name="defaultUriDisabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.defaultUriDisabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disables public resolution of the default URI of this Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#default_uri_disabled GoogleCloudRunV2Instance#default_uri_disabled}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#deletion_policy GoogleCloudRunV2Instance#deletion_policy}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.encryptionKey"></a>

- *Type:* java.lang.String

A reference to a customer managed encryption key (CMEK) to use to encrypt this container image.

For more information, go to https://cloud.google.com/run/docs/securing/using-cmek

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#encryption_key GoogleCloudRunV2Instance#encryption_key}

---

##### `encryptionKeyRevocationAction`<sup>Optional</sup> <a name="encryptionKeyRevocationAction" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.encryptionKeyRevocationAction"></a>

- *Type:* java.lang.String

The action to take if the encryption key is revoked. Possible values: ["PREVENT_NEW", "SHUTDOWN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#encryption_key_revocation_action GoogleCloudRunV2Instance#encryption_key_revocation_action}

---

##### `encryptionKeyShutdownDuration`<sup>Optional</sup> <a name="encryptionKeyShutdownDuration" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.encryptionKeyShutdownDuration"></a>

- *Type:* java.lang.String

If encryptionKeyRevocationAction is SHUTDOWN, the duration before shutting down all instances.

The minimum increment is 1 hour.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#encryption_key_shutdown_duration GoogleCloudRunV2Instance#encryption_key_shutdown_duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#id GoogleCloudRunV2Instance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.ingress"></a>

- *Type:* java.lang.String

Provides the ingress settings for this Instance.

On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active. Possible values: ["INGRESS_TRAFFIC_ALL", "INGRESS_TRAFFIC_INTERNAL_ONLY", "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#ingress GoogleCloudRunV2Instance#ingress}

---

##### `invokerIamDisabled`<sup>Optional</sup> <a name="invokerIamDisabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.invokerIamDisabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disables IAM permission check for run.routes.invoke for callers of this Instance. For more information, visit https://cloud.google.com/run/docs/securing/managing-access#invoker_check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#invoker_iam_disabled GoogleCloudRunV2Instance#invoker_iam_disabled}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.
Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#labels GoogleCloudRunV2Instance#labels}

---

##### `launchStage`<sup>Optional</sup> <a name="launchStage" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.launchStage"></a>

- *Type:* java.lang.String

The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#launch_stage GoogleCloudRunV2Instance#launch_stage}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#project GoogleCloudRunV2Instance#project}.

---

##### `restartPolicy`<sup>Optional</sup> <a name="restartPolicy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.restartPolicy"></a>

- *Type:* java.lang.String

Restart policy for the Instance. If not provided, the default is ON_FAILURE. Possible values: ["ALWAYS", "ON_FAILURE", "NEVER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#restart_policy GoogleCloudRunV2Instance#restart_policy}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.serviceAccount"></a>

- *Type:* java.lang.String

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

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>>

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#volumes GoogleCloudRunV2Instance#volumes}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putContainers">putContainers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetClient">resetClient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetClientVersion">resetClientVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetDefaultUriDisabled">resetDefaultUriDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKeyRevocationAction">resetEncryptionKeyRevocationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKeyShutdownDuration">resetEncryptionKeyShutdownDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetIngress">resetIngress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetInvokerIamDisabled">resetInvokerIamDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetLaunchStage">resetLaunchStage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetRestartPolicy">resetRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetVolumes">resetVolumes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContainers` <a name="putContainers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putContainers"></a>

```java
public void putContainers(IResolvable|java.util.List<GoogleCloudRunV2InstanceContainers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putContainers.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putTimeouts"></a>

```java
public void putTimeouts(GoogleCloudRunV2InstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a>

---

##### `putVolumes` <a name="putVolumes" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putVolumes"></a>

```java
public void putVolumes(IResolvable|java.util.List<GoogleCloudRunV2InstanceVolumes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putVolumes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetClient` <a name="resetClient" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetClient"></a>

```java
public void resetClient()
```

##### `resetClientVersion` <a name="resetClientVersion" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetClientVersion"></a>

```java
public void resetClientVersion()
```

##### `resetDefaultUriDisabled` <a name="resetDefaultUriDisabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetDefaultUriDisabled"></a>

```java
public void resetDefaultUriDisabled()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKey"></a>

```java
public void resetEncryptionKey()
```

##### `resetEncryptionKeyRevocationAction` <a name="resetEncryptionKeyRevocationAction" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKeyRevocationAction"></a>

```java
public void resetEncryptionKeyRevocationAction()
```

##### `resetEncryptionKeyShutdownDuration` <a name="resetEncryptionKeyShutdownDuration" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKeyShutdownDuration"></a>

```java
public void resetEncryptionKeyShutdownDuration()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetId"></a>

```java
public void resetId()
```

##### `resetIngress` <a name="resetIngress" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetIngress"></a>

```java
public void resetIngress()
```

##### `resetInvokerIamDisabled` <a name="resetInvokerIamDisabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetInvokerIamDisabled"></a>

```java
public void resetInvokerIamDisabled()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLaunchStage` <a name="resetLaunchStage" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetLaunchStage"></a>

```java
public void resetLaunchStage()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetProject"></a>

```java
public void resetProject()
```

##### `resetRestartPolicy` <a name="resetRestartPolicy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetRestartPolicy"></a>

```java
public void resetRestartPolicy()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVolumes` <a name="resetVolumes" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetVolumes"></a>

```java
public void resetVolumes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCloudRunV2Instance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2Instance;

GoogleCloudRunV2Instance.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2Instance;

GoogleCloudRunV2Instance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2Instance;

GoogleCloudRunV2Instance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2Instance;

GoogleCloudRunV2Instance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleCloudRunV2Instance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleCloudRunV2Instance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleCloudRunV2Instance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleCloudRunV2Instance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCloudRunV2Instance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList">GoogleCloudRunV2InstanceConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containers">containers</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList">GoogleCloudRunV2InstanceContainersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containerStatuses">containerStatuses</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList">GoogleCloudRunV2InstanceContainerStatusesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.creator">creator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deleteTime">deleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.generation">generation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.lastModifier">lastModifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.logUri">logUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.observedGeneration">observedGeneration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.reconciling">reconciling</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.satisfiesPzs">satisfiesPzs</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terminalCondition">terminalCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList">GoogleCloudRunV2InstanceTerminalConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference">GoogleCloudRunV2InstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.urls">urls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.volumes">volumes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList">GoogleCloudRunV2InstanceVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientInput">clientInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientVersionInput">clientVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containersInput">containersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.defaultUriDisabledInput">defaultUriDisabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyRevocationActionInput">encryptionKeyRevocationActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyShutdownDurationInput">encryptionKeyShutdownDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.ingressInput">ingressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.invokerIamDisabledInput">invokerIamDisabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.launchStageInput">launchStageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.restartPolicyInput">restartPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.volumesInput">volumesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.client">client</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientVersion">clientVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.defaultUriDisabled">defaultUriDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKey">encryptionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyRevocationAction">encryptionKeyRevocationAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyShutdownDuration">encryptionKeyShutdownDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.ingress">ingress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.invokerIamDisabled">invokerIamDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.launchStage">launchStage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.restartPolicy">restartPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.conditions"></a>

```java
public GoogleCloudRunV2InstanceConditionsList getConditions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList">GoogleCloudRunV2InstanceConditionsList</a>

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containers"></a>

```java
public GoogleCloudRunV2InstanceContainersList getContainers();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList">GoogleCloudRunV2InstanceContainersList</a>

---

##### `containerStatuses`<sup>Required</sup> <a name="containerStatuses" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containerStatuses"></a>

```java
public GoogleCloudRunV2InstanceContainerStatusesList getContainerStatuses();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList">GoogleCloudRunV2InstanceContainerStatusesList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.creator"></a>

```java
public java.lang.String getCreator();
```

- *Type:* java.lang.String

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deleteTime"></a>

```java
public java.lang.String getDeleteTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.generation"></a>

```java
public java.lang.String getGeneration();
```

- *Type:* java.lang.String

---

##### `lastModifier`<sup>Required</sup> <a name="lastModifier" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.lastModifier"></a>

```java
public java.lang.String getLastModifier();
```

- *Type:* java.lang.String

---

##### `logUri`<sup>Required</sup> <a name="logUri" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.logUri"></a>

```java
public java.lang.String getLogUri();
```

- *Type:* java.lang.String

---

##### `observedGeneration`<sup>Required</sup> <a name="observedGeneration" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.observedGeneration"></a>

```java
public java.lang.String getObservedGeneration();
```

- *Type:* java.lang.String

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `satisfiesPzs`<sup>Required</sup> <a name="satisfiesPzs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.satisfiesPzs"></a>

```java
public IResolvable getSatisfiesPzs();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `terminalCondition`<sup>Required</sup> <a name="terminalCondition" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terminalCondition"></a>

```java
public GoogleCloudRunV2InstanceTerminalConditionList getTerminalCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList">GoogleCloudRunV2InstanceTerminalConditionList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.timeouts"></a>

```java
public GoogleCloudRunV2InstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference">GoogleCloudRunV2InstanceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.urls"></a>

```java
public java.util.List<java.lang.String> getUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.volumes"></a>

```java
public GoogleCloudRunV2InstanceVolumesList getVolumes();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList">GoogleCloudRunV2InstanceVolumesList</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `clientInput`<sup>Optional</sup> <a name="clientInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientInput"></a>

```java
public java.lang.String getClientInput();
```

- *Type:* java.lang.String

---

##### `clientVersionInput`<sup>Optional</sup> <a name="clientVersionInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientVersionInput"></a>

```java
public java.lang.String getClientVersionInput();
```

- *Type:* java.lang.String

---

##### `containersInput`<sup>Optional</sup> <a name="containersInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containersInput"></a>

```java
public IResolvable|java.util.List<GoogleCloudRunV2InstanceContainers> getContainersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>>

---

##### `defaultUriDisabledInput`<sup>Optional</sup> <a name="defaultUriDisabledInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.defaultUriDisabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDefaultUriDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyInput"></a>

```java
public java.lang.String getEncryptionKeyInput();
```

- *Type:* java.lang.String

---

##### `encryptionKeyRevocationActionInput`<sup>Optional</sup> <a name="encryptionKeyRevocationActionInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyRevocationActionInput"></a>

```java
public java.lang.String getEncryptionKeyRevocationActionInput();
```

- *Type:* java.lang.String

---

##### `encryptionKeyShutdownDurationInput`<sup>Optional</sup> <a name="encryptionKeyShutdownDurationInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyShutdownDurationInput"></a>

```java
public java.lang.String getEncryptionKeyShutdownDurationInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ingressInput`<sup>Optional</sup> <a name="ingressInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.ingressInput"></a>

```java
public java.lang.String getIngressInput();
```

- *Type:* java.lang.String

---

##### `invokerIamDisabledInput`<sup>Optional</sup> <a name="invokerIamDisabledInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.invokerIamDisabledInput"></a>

```java
public java.lang.Boolean|IResolvable getInvokerIamDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `launchStageInput`<sup>Optional</sup> <a name="launchStageInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.launchStageInput"></a>

```java
public java.lang.String getLaunchStageInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `restartPolicyInput`<sup>Optional</sup> <a name="restartPolicyInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.restartPolicyInput"></a>

```java
public java.lang.String getRestartPolicyInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.timeoutsInput"></a>

```java
public IResolvable|GoogleCloudRunV2InstanceTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a>

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.volumesInput"></a>

```java
public IResolvable|java.util.List<GoogleCloudRunV2InstanceVolumes> getVolumesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `client`<sup>Required</sup> <a name="client" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.client"></a>

```java
public java.lang.String getClient();
```

- *Type:* java.lang.String

---

##### `clientVersion`<sup>Required</sup> <a name="clientVersion" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientVersion"></a>

```java
public java.lang.String getClientVersion();
```

- *Type:* java.lang.String

---

##### `defaultUriDisabled`<sup>Required</sup> <a name="defaultUriDisabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.defaultUriDisabled"></a>

```java
public java.lang.Boolean|IResolvable getDefaultUriDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKey"></a>

```java
public java.lang.String getEncryptionKey();
```

- *Type:* java.lang.String

---

##### `encryptionKeyRevocationAction`<sup>Required</sup> <a name="encryptionKeyRevocationAction" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyRevocationAction"></a>

```java
public java.lang.String getEncryptionKeyRevocationAction();
```

- *Type:* java.lang.String

---

##### `encryptionKeyShutdownDuration`<sup>Required</sup> <a name="encryptionKeyShutdownDuration" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyShutdownDuration"></a>

```java
public java.lang.String getEncryptionKeyShutdownDuration();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.ingress"></a>

```java
public java.lang.String getIngress();
```

- *Type:* java.lang.String

---

##### `invokerIamDisabled`<sup>Required</sup> <a name="invokerIamDisabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.invokerIamDisabled"></a>

```java
public java.lang.Boolean|IResolvable getInvokerIamDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `launchStage`<sup>Required</sup> <a name="launchStage" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.launchStage"></a>

```java
public java.lang.String getLaunchStage();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `restartPolicy`<sup>Required</sup> <a name="restartPolicy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.restartPolicy"></a>

```java
public java.lang.String getRestartPolicy();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudRunV2InstanceConditions <a name="GoogleCloudRunV2InstanceConditions" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditions.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceConditions;

GoogleCloudRunV2InstanceConditions.builder()
    .build();
```


### GoogleCloudRunV2InstanceConfig <a name="GoogleCloudRunV2InstanceConfig" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceConfig;

GoogleCloudRunV2InstanceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .containers(IResolvable|java.util.List<GoogleCloudRunV2InstanceContainers>)
    .location(java.lang.String)
    .name(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .client(java.lang.String)
//  .clientVersion(java.lang.String)
//  .defaultUriDisabled(java.lang.Boolean|IResolvable)
//  .deletionPolicy(java.lang.String)
//  .encryptionKey(java.lang.String)
//  .encryptionKeyRevocationAction(java.lang.String)
//  .encryptionKeyShutdownDuration(java.lang.String)
//  .id(java.lang.String)
//  .ingress(java.lang.String)
//  .invokerIamDisabled(java.lang.Boolean|IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .launchStage(java.lang.String)
//  .project(java.lang.String)
//  .restartPolicy(java.lang.String)
//  .serviceAccount(java.lang.String)
//  .timeouts(GoogleCloudRunV2InstanceTimeouts)
//  .volumes(IResolvable|java.util.List<GoogleCloudRunV2InstanceVolumes>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.containers">containers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>></code> | containers block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the cloud run instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.client">client</a></code> | <code>java.lang.String</code> | Arbitrary identifier for the API client. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.clientVersion">clientVersion</a></code> | <code>java.lang.String</code> | Arbitrary version identifier for the API client. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.defaultUriDisabled">defaultUriDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disables public resolution of the default URI of this Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKey">encryptionKey</a></code> | <code>java.lang.String</code> | A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKeyRevocationAction">encryptionKeyRevocationAction</a></code> | <code>java.lang.String</code> | The action to take if the encryption key is revoked. Possible values: ["PREVENT_NEW", "SHUTDOWN"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKeyShutdownDuration">encryptionKeyShutdownDuration</a></code> | <code>java.lang.String</code> | If encryptionKeyRevocationAction is SHUTDOWN, the duration before shutting down all instances. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#id GoogleCloudRunV2Instance#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.ingress">ingress</a></code> | <code>java.lang.String</code> | Provides the ingress settings for this Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.invokerIamDisabled">invokerIamDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disables IAM permission check for run.routes.invoke for callers of this Instance. For more information, visit https://cloud.google.com/run/docs/securing/managing-access#invoker_check. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.launchStage">launchStage</a></code> | <code>java.lang.String</code> | The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#project GoogleCloudRunV2Instance#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.restartPolicy">restartPolicy</a></code> | <code>java.lang.String</code> | Restart policy for the Instance. If not provided, the default is ON_FAILURE. Possible values: ["ALWAYS", "ON_FAILURE", "NEVER"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Email address of the IAM service account associated with the Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.volumes">volumes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>></code> | volumes block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.containers"></a>

```java
public IResolvable|java.util.List<GoogleCloudRunV2InstanceContainers> getContainers();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>>

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#containers GoogleCloudRunV2Instance#containers}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the cloud run instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#location GoogleCloudRunV2Instance#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.
Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected in new resources.
This field follows Kubernetes annotations' namespacing, limits, and rules.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#annotations GoogleCloudRunV2Instance#annotations}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.client"></a>

```java
public java.lang.String getClient();
```

- *Type:* java.lang.String

Arbitrary identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#client GoogleCloudRunV2Instance#client}

---

##### `clientVersion`<sup>Optional</sup> <a name="clientVersion" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.clientVersion"></a>

```java
public java.lang.String getClientVersion();
```

- *Type:* java.lang.String

Arbitrary version identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#client_version GoogleCloudRunV2Instance#client_version}

---

##### `defaultUriDisabled`<sup>Optional</sup> <a name="defaultUriDisabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.defaultUriDisabled"></a>

```java
public java.lang.Boolean|IResolvable getDefaultUriDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disables public resolution of the default URI of this Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#default_uri_disabled GoogleCloudRunV2Instance#default_uri_disabled}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#deletion_policy GoogleCloudRunV2Instance#deletion_policy}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKey"></a>

```java
public java.lang.String getEncryptionKey();
```

- *Type:* java.lang.String

A reference to a customer managed encryption key (CMEK) to use to encrypt this container image.

For more information, go to https://cloud.google.com/run/docs/securing/using-cmek

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#encryption_key GoogleCloudRunV2Instance#encryption_key}

---

##### `encryptionKeyRevocationAction`<sup>Optional</sup> <a name="encryptionKeyRevocationAction" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKeyRevocationAction"></a>

```java
public java.lang.String getEncryptionKeyRevocationAction();
```

- *Type:* java.lang.String

The action to take if the encryption key is revoked. Possible values: ["PREVENT_NEW", "SHUTDOWN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#encryption_key_revocation_action GoogleCloudRunV2Instance#encryption_key_revocation_action}

---

##### `encryptionKeyShutdownDuration`<sup>Optional</sup> <a name="encryptionKeyShutdownDuration" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKeyShutdownDuration"></a>

```java
public java.lang.String getEncryptionKeyShutdownDuration();
```

- *Type:* java.lang.String

If encryptionKeyRevocationAction is SHUTDOWN, the duration before shutting down all instances.

The minimum increment is 1 hour.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#encryption_key_shutdown_duration GoogleCloudRunV2Instance#encryption_key_shutdown_duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#id GoogleCloudRunV2Instance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.ingress"></a>

```java
public java.lang.String getIngress();
```

- *Type:* java.lang.String

Provides the ingress settings for this Instance.

On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active. Possible values: ["INGRESS_TRAFFIC_ALL", "INGRESS_TRAFFIC_INTERNAL_ONLY", "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#ingress GoogleCloudRunV2Instance#ingress}

---

##### `invokerIamDisabled`<sup>Optional</sup> <a name="invokerIamDisabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.invokerIamDisabled"></a>

```java
public java.lang.Boolean|IResolvable getInvokerIamDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disables IAM permission check for run.routes.invoke for callers of this Instance. For more information, visit https://cloud.google.com/run/docs/securing/managing-access#invoker_check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#invoker_iam_disabled GoogleCloudRunV2Instance#invoker_iam_disabled}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.
Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#labels GoogleCloudRunV2Instance#labels}

---

##### `launchStage`<sup>Optional</sup> <a name="launchStage" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.launchStage"></a>

```java
public java.lang.String getLaunchStage();
```

- *Type:* java.lang.String

The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#launch_stage GoogleCloudRunV2Instance#launch_stage}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#project GoogleCloudRunV2Instance#project}.

---

##### `restartPolicy`<sup>Optional</sup> <a name="restartPolicy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.restartPolicy"></a>

```java
public java.lang.String getRestartPolicy();
```

- *Type:* java.lang.String

Restart policy for the Instance. If not provided, the default is ON_FAILURE. Possible values: ["ALWAYS", "ON_FAILURE", "NEVER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#restart_policy GoogleCloudRunV2Instance#restart_policy}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Email address of the IAM service account associated with the Instance.

The service account represents the identity of the running Instance, and determines what permissions the instance has.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#service_account GoogleCloudRunV2Instance#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.timeouts"></a>

```java
public GoogleCloudRunV2InstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#timeouts GoogleCloudRunV2Instance#timeouts}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.volumes"></a>

```java
public IResolvable|java.util.List<GoogleCloudRunV2InstanceVolumes> getVolumes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>>

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#volumes GoogleCloudRunV2Instance#volumes}

---

### GoogleCloudRunV2InstanceContainers <a name="GoogleCloudRunV2InstanceContainers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainers;

GoogleCloudRunV2InstanceContainers.builder()
    .image(java.lang.String)
//  .args(java.util.List<java.lang.String>)
//  .command(java.util.List<java.lang.String>)
//  .env(IResolvable|java.util.List<GoogleCloudRunV2InstanceContainersEnv>)
//  .livenessProbe(GoogleCloudRunV2InstanceContainersLivenessProbe)
//  .name(java.lang.String)
//  .ports(IResolvable|java.util.List<GoogleCloudRunV2InstanceContainersPorts>)
//  .resources(GoogleCloudRunV2InstanceContainersResources)
//  .startupProbe(GoogleCloudRunV2InstanceContainersStartupProbe)
//  .volumeMounts(IResolvable|java.util.List<GoogleCloudRunV2InstanceContainersVolumeMounts>)
//  .workingDir(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.image">image</a></code> | <code>java.lang.String</code> | URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | Arguments to the entrypoint. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | Entrypoint array. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.env">env</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>></code> | env block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.livenessProbe">livenessProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a></code> | liveness_probe block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.name">name</a></code> | <code>java.lang.String</code> | Name of the container specified as a DNS_LABEL. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.ports">ports</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>></code> | ports block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a></code> | resources block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.startupProbe">startupProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a></code> | startup_probe block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.volumeMounts">volumeMounts</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>></code> | volume_mounts block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.workingDir">workingDir</a></code> | <code>java.lang.String</code> | Container's working directory. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#image GoogleCloudRunV2Instance#image}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

Arguments to the entrypoint.

The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#args GoogleCloudRunV2Instance#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

Entrypoint array.

Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#command GoogleCloudRunV2Instance#command}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.env"></a>

```java
public IResolvable|java.util.List<GoogleCloudRunV2InstanceContainersEnv> getEnv();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>>

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#env GoogleCloudRunV2Instance#env}

---

##### `livenessProbe`<sup>Optional</sup> <a name="livenessProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.livenessProbe"></a>

```java
public GoogleCloudRunV2InstanceContainersLivenessProbe getLivenessProbe();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a>

liveness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#liveness_probe GoogleCloudRunV2Instance#liveness_probe}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the container specified as a DNS_LABEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.ports"></a>

```java
public IResolvable|java.util.List<GoogleCloudRunV2InstanceContainersPorts> getPorts();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>>

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#ports GoogleCloudRunV2Instance#ports}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.resources"></a>

```java
public GoogleCloudRunV2InstanceContainersResources getResources();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#resources GoogleCloudRunV2Instance#resources}

---

##### `startupProbe`<sup>Optional</sup> <a name="startupProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.startupProbe"></a>

```java
public GoogleCloudRunV2InstanceContainersStartupProbe getStartupProbe();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a>

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#startup_probe GoogleCloudRunV2Instance#startup_probe}

---

##### `volumeMounts`<sup>Optional</sup> <a name="volumeMounts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.volumeMounts"></a>

```java
public IResolvable|java.util.List<GoogleCloudRunV2InstanceContainersVolumeMounts> getVolumeMounts();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>>

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#volume_mounts GoogleCloudRunV2Instance#volume_mounts}

---

##### `workingDir`<sup>Optional</sup> <a name="workingDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.workingDir"></a>

```java
public java.lang.String getWorkingDir();
```

- *Type:* java.lang.String

Container's working directory.

If not specified, the container runtime's default will be used, which might be configured in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#working_dir GoogleCloudRunV2Instance#working_dir}

---

### GoogleCloudRunV2InstanceContainersEnv <a name="GoogleCloudRunV2InstanceContainersEnv" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersEnv;

GoogleCloudRunV2InstanceContainersEnv.builder()
    .name(java.lang.String)
//  .value(java.lang.String)
//  .valueSource(GoogleCloudRunV2InstanceContainersEnvValueSource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.name">name</a></code> | <code>java.lang.String</code> | Name of the environment variable. Must be a C_IDENTIFIER, and may not exceed 32768 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.value">value</a></code> | <code>java.lang.String</code> | Literal value of the environment variable. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.valueSource">valueSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a></code> | value_source block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the environment variable. Must be a C_IDENTIFIER, and may not exceed 32768 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Literal value of the environment variable.

Defaults to "" and the maximum allowed length is 32768 characters. Variable references are not supported in Cloud Run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#value GoogleCloudRunV2Instance#value}

---

##### `valueSource`<sup>Optional</sup> <a name="valueSource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.valueSource"></a>

```java
public GoogleCloudRunV2InstanceContainersEnvValueSource getValueSource();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a>

value_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#value_source GoogleCloudRunV2Instance#value_source}

---

### GoogleCloudRunV2InstanceContainersEnvValueSource <a name="GoogleCloudRunV2InstanceContainersEnvValueSource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersEnvValueSource;

GoogleCloudRunV2InstanceContainersEnvValueSource.builder()
//  .secretKeyRef(GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource.property.secretKeyRef">secretKeyRef</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `secretKeyRef`<sup>Optional</sup> <a name="secretKeyRef" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource.property.secretKeyRef"></a>

```java
public GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef getSecretKeyRef();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#secret_key_ref GoogleCloudRunV2Instance#secret_key_ref}

---

### GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef <a name="GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef;

GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.builder()
    .secret(java.lang.String)
    .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.property.secret">secret</a></code> | <code>java.lang.String</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.property.version">version</a></code> | <code>java.lang.String</code> | The Cloud Secret Manager secret version. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

The name of the secret in Cloud Secret Manager.

Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#secret GoogleCloudRunV2Instance#secret}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#version GoogleCloudRunV2Instance#version}

---

### GoogleCloudRunV2InstanceContainersLivenessProbe <a name="GoogleCloudRunV2InstanceContainersLivenessProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersLivenessProbe;

GoogleCloudRunV2InstanceContainersLivenessProbe.builder()
//  .failureThreshold(java.lang.Number)
//  .grpc(GoogleCloudRunV2InstanceContainersLivenessProbeGrpc)
//  .httpGet(GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet)
//  .initialDelaySeconds(java.lang.Number)
//  .periodSeconds(java.lang.Number)
//  .timeoutSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.grpc">grpc</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a></code> | grpc block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.httpGet">httpGet</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>java.lang.Number</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | Optional. |

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.failureThreshold"></a>

```java
public java.lang.Number getFailureThreshold();
```

- *Type:* java.lang.Number

Optional.

Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#failure_threshold GoogleCloudRunV2Instance#failure_threshold}

---

##### `grpc`<sup>Optional</sup> <a name="grpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.grpc"></a>

```java
public GoogleCloudRunV2InstanceContainersLivenessProbeGrpc getGrpc();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#grpc GoogleCloudRunV2Instance#grpc}

---

##### `httpGet`<sup>Optional</sup> <a name="httpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.httpGet"></a>

```java
public GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet getHttpGet();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#http_get GoogleCloudRunV2Instance#http_get}

---

##### `initialDelaySeconds`<sup>Optional</sup> <a name="initialDelaySeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.initialDelaySeconds"></a>

```java
public java.lang.Number getInitialDelaySeconds();
```

- *Type:* java.lang.Number

Optional.

Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#initial_delay_seconds GoogleCloudRunV2Instance#initial_delay_seconds}

---

##### `periodSeconds`<sup>Optional</sup> <a name="periodSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

Optional.

How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#period_seconds GoogleCloudRunV2Instance#period_seconds}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

Optional.

Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#timeout_seconds GoogleCloudRunV2Instance#timeout_seconds}

---

### GoogleCloudRunV2InstanceContainersLivenessProbeGrpc <a name="GoogleCloudRunV2InstanceContainersLivenessProbeGrpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc;

GoogleCloudRunV2InstanceContainersLivenessProbeGrpc.builder()
//  .port(java.lang.Number)
//  .service(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc.property.port">port</a></code> | <code>java.lang.Number</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc.property.service">service</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Optional.

Port number of the gRPC service. Number must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Optional.

Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md ). If this is not specified, the default behavior is defined by gRPC

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#service GoogleCloudRunV2Instance#service}

---

### GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet <a name="GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet;

GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.builder()
//  .httpHeaders(IResolvable|java.util.List<GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders>)
//  .path(java.lang.String)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.httpHeaders">httpHeaders</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>></code> | http_headers block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.path">path</a></code> | <code>java.lang.String</code> | Optional. Path to access on the HTTP server. Defaults to '/'. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.port">port</a></code> | <code>java.lang.Number</code> | Optional. |

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.httpHeaders"></a>

```java
public IResolvable|java.util.List<GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders> getHttpHeaders();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>>

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#http_headers GoogleCloudRunV2Instance#http_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Optional. Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#path GoogleCloudRunV2Instance#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Optional.

Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

### GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders <a name="GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders;

GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.property.name">name</a></code> | <code>java.lang.String</code> | Required. The header field name. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.property.value">value</a></code> | <code>java.lang.String</code> | Optional. The header field value. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Required. The header field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Optional. The header field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#value GoogleCloudRunV2Instance#value}

---

### GoogleCloudRunV2InstanceContainersPorts <a name="GoogleCloudRunV2InstanceContainersPorts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersPorts;

GoogleCloudRunV2InstanceContainersPorts.builder()
//  .containerPort(java.lang.Number)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts.property.name">name</a></code> | <code>java.lang.String</code> | If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c". |

---

##### `containerPort`<sup>Optional</sup> <a name="containerPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#container_port GoogleCloudRunV2Instance#container_port}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

### GoogleCloudRunV2InstanceContainersResources <a name="GoogleCloudRunV2InstanceContainersResources" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersResources;

GoogleCloudRunV2InstanceContainersResources.builder()
//  .limits(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources.property.limits">limits</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Only memory and CPU are supported. |

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources.property.limits"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLimits();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Only memory and CPU are supported.

Use key 'cpu' for CPU limit, 'memory' for memory limit. Note: The only supported values for CPU are '1', '2', '4', '6', and '8'. Setting 4 CPU requires at least 2Gi of memory, setting 6 or more CPU requires at least 4Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#limits GoogleCloudRunV2Instance#limits}

---

### GoogleCloudRunV2InstanceContainersStartupProbe <a name="GoogleCloudRunV2InstanceContainersStartupProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersStartupProbe;

GoogleCloudRunV2InstanceContainersStartupProbe.builder()
//  .failureThreshold(java.lang.Number)
//  .grpc(GoogleCloudRunV2InstanceContainersStartupProbeGrpc)
//  .httpGet(GoogleCloudRunV2InstanceContainersStartupProbeHttpGet)
//  .initialDelaySeconds(java.lang.Number)
//  .periodSeconds(java.lang.Number)
//  .tcpSocket(GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket)
//  .timeoutSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.grpc">grpc</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a></code> | grpc block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.httpGet">httpGet</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>java.lang.Number</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.tcpSocket">tcpSocket</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a></code> | tcp_socket block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | Optional. |

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.failureThreshold"></a>

```java
public java.lang.Number getFailureThreshold();
```

- *Type:* java.lang.Number

Optional.

Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#failure_threshold GoogleCloudRunV2Instance#failure_threshold}

---

##### `grpc`<sup>Optional</sup> <a name="grpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.grpc"></a>

```java
public GoogleCloudRunV2InstanceContainersStartupProbeGrpc getGrpc();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#grpc GoogleCloudRunV2Instance#grpc}

---

##### `httpGet`<sup>Optional</sup> <a name="httpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.httpGet"></a>

```java
public GoogleCloudRunV2InstanceContainersStartupProbeHttpGet getHttpGet();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#http_get GoogleCloudRunV2Instance#http_get}

---

##### `initialDelaySeconds`<sup>Optional</sup> <a name="initialDelaySeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.initialDelaySeconds"></a>

```java
public java.lang.Number getInitialDelaySeconds();
```

- *Type:* java.lang.Number

Optional.

Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#initial_delay_seconds GoogleCloudRunV2Instance#initial_delay_seconds}

---

##### `periodSeconds`<sup>Optional</sup> <a name="periodSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

Optional.

How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#period_seconds GoogleCloudRunV2Instance#period_seconds}

---

##### `tcpSocket`<sup>Optional</sup> <a name="tcpSocket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.tcpSocket"></a>

```java
public GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket getTcpSocket();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a>

tcp_socket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#tcp_socket GoogleCloudRunV2Instance#tcp_socket}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

Optional.

Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#timeout_seconds GoogleCloudRunV2Instance#timeout_seconds}

---

### GoogleCloudRunV2InstanceContainersStartupProbeGrpc <a name="GoogleCloudRunV2InstanceContainersStartupProbeGrpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc;

GoogleCloudRunV2InstanceContainersStartupProbeGrpc.builder()
//  .port(java.lang.Number)
//  .service(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc.property.port">port</a></code> | <code>java.lang.Number</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc.property.service">service</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Optional.

Port number of the gRPC service. Number must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Optional.

Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md ). If this is not specified, the default behavior is defined by gRPC

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#service GoogleCloudRunV2Instance#service}

---

### GoogleCloudRunV2InstanceContainersStartupProbeHttpGet <a name="GoogleCloudRunV2InstanceContainersStartupProbeHttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet;

GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.builder()
//  .httpHeaders(IResolvable|java.util.List<GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders>)
//  .path(java.lang.String)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.httpHeaders">httpHeaders</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>></code> | http_headers block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.path">path</a></code> | <code>java.lang.String</code> | Optional. Path to access on the HTTP server. Defaults to '/'. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.port">port</a></code> | <code>java.lang.Number</code> | Optional. |

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.httpHeaders"></a>

```java
public IResolvable|java.util.List<GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders> getHttpHeaders();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>>

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#http_headers GoogleCloudRunV2Instance#http_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Optional. Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#path GoogleCloudRunV2Instance#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Optional.

Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

### GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders <a name="GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders;

GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.property.name">name</a></code> | <code>java.lang.String</code> | Required. The header field name. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.property.value">value</a></code> | <code>java.lang.String</code> | Optional. The header field value. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Required. The header field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Optional. The header field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#value GoogleCloudRunV2Instance#value}

---

### GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket <a name="GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket;

GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket.builder()
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket.property.port">port</a></code> | <code>java.lang.Number</code> | Optional. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Optional.

Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

### GoogleCloudRunV2InstanceContainerStatuses <a name="GoogleCloudRunV2InstanceContainerStatuses" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatuses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatuses.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainerStatuses;

GoogleCloudRunV2InstanceContainerStatuses.builder()
    .build();
```


### GoogleCloudRunV2InstanceContainersVolumeMounts <a name="GoogleCloudRunV2InstanceContainersVolumeMounts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersVolumeMounts;

GoogleCloudRunV2InstanceContainersVolumeMounts.builder()
    .mountPath(java.lang.String)
    .name(java.lang.String)
//  .subPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | Path within the container at which the volume should be mounted. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.name">name</a></code> | <code>java.lang.String</code> | This must match the Name of a Volume. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.subPath">subPath</a></code> | <code>java.lang.String</code> | Path within the volume from which the container's volume should be mounted. |

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

Path within the container at which the volume should be mounted.

Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#mount_path GoogleCloudRunV2Instance#mount_path}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

This must match the Name of a Volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `subPath`<sup>Optional</sup> <a name="subPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.subPath"></a>

```java
public java.lang.String getSubPath();
```

- *Type:* java.lang.String

Path within the volume from which the container's volume should be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#sub_path GoogleCloudRunV2Instance#sub_path}

---

### GoogleCloudRunV2InstanceTerminalCondition <a name="GoogleCloudRunV2InstanceTerminalCondition" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalCondition.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceTerminalCondition;

GoogleCloudRunV2InstanceTerminalCondition.builder()
    .build();
```


### GoogleCloudRunV2InstanceTimeouts <a name="GoogleCloudRunV2InstanceTimeouts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceTimeouts;

GoogleCloudRunV2InstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#create GoogleCloudRunV2Instance#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#delete GoogleCloudRunV2Instance#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#update GoogleCloudRunV2Instance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#create GoogleCloudRunV2Instance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#delete GoogleCloudRunV2Instance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#update GoogleCloudRunV2Instance#update}.

---

### GoogleCloudRunV2InstanceVolumes <a name="GoogleCloudRunV2InstanceVolumes" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceVolumes;

GoogleCloudRunV2InstanceVolumes.builder()
    .name(java.lang.String)
//  .cloudSqlInstance(GoogleCloudRunV2InstanceVolumesCloudSqlInstance)
//  .emptyDir(GoogleCloudRunV2InstanceVolumesEmptyDir)
//  .gcs(GoogleCloudRunV2InstanceVolumesGcs)
//  .nfs(GoogleCloudRunV2InstanceVolumesNfs)
//  .secret(GoogleCloudRunV2InstanceVolumesSecret)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.name">name</a></code> | <code>java.lang.String</code> | Volume's name. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.cloudSqlInstance">cloudSqlInstance</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a></code> | cloud_sql_instance block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.emptyDir">emptyDir</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a></code> | empty_dir block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.gcs">gcs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a></code> | gcs block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.nfs">nfs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a></code> | nfs block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a></code> | secret block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Volume's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `cloudSqlInstance`<sup>Optional</sup> <a name="cloudSqlInstance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.cloudSqlInstance"></a>

```java
public GoogleCloudRunV2InstanceVolumesCloudSqlInstance getCloudSqlInstance();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a>

cloud_sql_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#cloud_sql_instance GoogleCloudRunV2Instance#cloud_sql_instance}

---

##### `emptyDir`<sup>Optional</sup> <a name="emptyDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.emptyDir"></a>

```java
public GoogleCloudRunV2InstanceVolumesEmptyDir getEmptyDir();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a>

empty_dir block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#empty_dir GoogleCloudRunV2Instance#empty_dir}

---

##### `gcs`<sup>Optional</sup> <a name="gcs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.gcs"></a>

```java
public GoogleCloudRunV2InstanceVolumesGcs getGcs();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a>

gcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#gcs GoogleCloudRunV2Instance#gcs}

---

##### `nfs`<sup>Optional</sup> <a name="nfs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.nfs"></a>

```java
public GoogleCloudRunV2InstanceVolumesNfs getNfs();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a>

nfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#nfs GoogleCloudRunV2Instance#nfs}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.secret"></a>

```java
public GoogleCloudRunV2InstanceVolumesSecret getSecret();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#secret GoogleCloudRunV2Instance#secret}

---

### GoogleCloudRunV2InstanceVolumesCloudSqlInstance <a name="GoogleCloudRunV2InstanceVolumesCloudSqlInstance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance;

GoogleCloudRunV2InstanceVolumesCloudSqlInstance.builder()
//  .instances(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance.property.instances">instances</a></code> | <code>java.util.List<java.lang.String></code> | The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}. |

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance.property.instances"></a>

```java
public java.util.List<java.lang.String> getInstances();
```

- *Type:* java.util.List<java.lang.String>

The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#instances GoogleCloudRunV2Instance#instances}

---

### GoogleCloudRunV2InstanceVolumesEmptyDir <a name="GoogleCloudRunV2InstanceVolumesEmptyDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceVolumesEmptyDir;

GoogleCloudRunV2InstanceVolumesEmptyDir.builder()
//  .medium(java.lang.String)
//  .sizeLimit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir.property.medium">medium</a></code> | <code>java.lang.String</code> | The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY", "DISK"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir.property.sizeLimit">sizeLimit</a></code> | <code>java.lang.String</code> | Limit on the storage usable by this EmptyDir volume. |

---

##### `medium`<sup>Optional</sup> <a name="medium" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir.property.medium"></a>

```java
public java.lang.String getMedium();
```

- *Type:* java.lang.String

The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY", "DISK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#medium GoogleCloudRunV2Instance#medium}

---

##### `sizeLimit`<sup>Optional</sup> <a name="sizeLimit" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir.property.sizeLimit"></a>

```java
public java.lang.String getSizeLimit();
```

- *Type:* java.lang.String

Limit on the storage usable by this EmptyDir volume.

The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. This field's values are of the 'Quantity' k8s type: https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#size_limit GoogleCloudRunV2Instance#size_limit}

---

### GoogleCloudRunV2InstanceVolumesGcs <a name="GoogleCloudRunV2InstanceVolumesGcs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceVolumesGcs;

GoogleCloudRunV2InstanceVolumesGcs.builder()
    .bucket(java.lang.String)
//  .mountOptions(java.util.List<java.lang.String>)
//  .readOnly(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.bucket">bucket</a></code> | <code>java.lang.String</code> | GCS Bucket name. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.mountOptions">mountOptions</a></code> | <code>java.util.List<java.lang.String></code> | A list of flags to pass to the gcsfuse command for configuring this volume. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, mount the GCS bucket as read-only. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

GCS Bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#bucket GoogleCloudRunV2Instance#bucket}

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.mountOptions"></a>

```java
public java.util.List<java.lang.String> getMountOptions();
```

- *Type:* java.util.List<java.lang.String>

A list of flags to pass to the gcsfuse command for configuring this volume.

Flags should be passed without leading dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#mount_options GoogleCloudRunV2Instance#mount_options}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.readOnly"></a>

```java
public java.lang.Boolean|IResolvable getReadOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, mount the GCS bucket as read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#read_only GoogleCloudRunV2Instance#read_only}

---

### GoogleCloudRunV2InstanceVolumesNfs <a name="GoogleCloudRunV2InstanceVolumesNfs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceVolumesNfs;

GoogleCloudRunV2InstanceVolumesNfs.builder()
    .path(java.lang.String)
    .server(java.lang.String)
//  .readOnly(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.path">path</a></code> | <code>java.lang.String</code> | Path that is exported by the NFS server. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.server">server</a></code> | <code>java.lang.String</code> | Hostname or IP address of the NFS server. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, mount the NFS volume as read only. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path that is exported by the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#path GoogleCloudRunV2Instance#path}

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

Hostname or IP address of the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#server GoogleCloudRunV2Instance#server}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.readOnly"></a>

```java
public java.lang.Boolean|IResolvable getReadOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, mount the NFS volume as read only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#read_only GoogleCloudRunV2Instance#read_only}

---

### GoogleCloudRunV2InstanceVolumesSecret <a name="GoogleCloudRunV2InstanceVolumesSecret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceVolumesSecret;

GoogleCloudRunV2InstanceVolumesSecret.builder()
    .secret(java.lang.String)
//  .defaultMode(java.lang.Number)
//  .items(IResolvable|java.util.List<GoogleCloudRunV2InstanceVolumesSecretItems>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.secret">secret</a></code> | <code>java.lang.String</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.defaultMode">defaultMode</a></code> | <code>java.lang.Number</code> | Integer representation of mode bits to use on created files by default. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.items">items</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>></code> | items block. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

The name of the secret in Cloud Secret Manager.

Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#secret GoogleCloudRunV2Instance#secret}

---

##### `defaultMode`<sup>Optional</sup> <a name="defaultMode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.defaultMode"></a>

```java
public java.lang.Number getDefaultMode();
```

- *Type:* java.lang.Number

Integer representation of mode bits to use on created files by default.

Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#default_mode GoogleCloudRunV2Instance#default_mode}

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.items"></a>

```java
public IResolvable|java.util.List<GoogleCloudRunV2InstanceVolumesSecretItems> getItems();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>>

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#items GoogleCloudRunV2Instance#items}

---

### GoogleCloudRunV2InstanceVolumesSecretItems <a name="GoogleCloudRunV2InstanceVolumesSecretItems" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceVolumesSecretItems;

GoogleCloudRunV2InstanceVolumesSecretItems.builder()
    .path(java.lang.String)
//  .mode(java.lang.Number)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.path">path</a></code> | <code>java.lang.String</code> | The relative path of the secret in the container. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.mode">mode</a></code> | <code>java.lang.Number</code> | Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.version">version</a></code> | <code>java.lang.String</code> | The Cloud Secret Manager secret version. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The relative path of the secret in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#path GoogleCloudRunV2Instance#path}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.mode"></a>

```java
public java.lang.Number getMode();
```

- *Type:* java.lang.Number

Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal).

If 0 or not set, the Volume's default mode will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#mode GoogleCloudRunV2Instance#mode}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#version GoogleCloudRunV2Instance#version}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudRunV2InstanceConditionsList <a name="GoogleCloudRunV2InstanceConditionsList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceConditionsList;

new GoogleCloudRunV2InstanceConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.get"></a>

```java
public GoogleCloudRunV2InstanceConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleCloudRunV2InstanceConditionsOutputReference <a name="GoogleCloudRunV2InstanceConditionsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceConditionsOutputReference;

new GoogleCloudRunV2InstanceConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.instanceReason">instanceReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditions">GoogleCloudRunV2InstanceConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceReason`<sup>Required</sup> <a name="instanceReason" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.instanceReason"></a>

```java
public java.lang.String getInstanceReason();
```

- *Type:* java.lang.String

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.lastTransitionTime"></a>

```java
public java.lang.String getLastTransitionTime();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2InstanceConditions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditions">GoogleCloudRunV2InstanceConditions</a>

---


### GoogleCloudRunV2InstanceContainersEnvList <a name="GoogleCloudRunV2InstanceContainersEnvList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersEnvList;

new GoogleCloudRunV2InstanceContainersEnvList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.get"></a>

```java
public GoogleCloudRunV2InstanceContainersEnvOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleCloudRunV2InstanceContainersEnv> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>>

---


### GoogleCloudRunV2InstanceContainersEnvOutputReference <a name="GoogleCloudRunV2InstanceContainersEnvOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersEnvOutputReference;

new GoogleCloudRunV2InstanceContainersEnvOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.putValueSource">putValueSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resetValueSource">resetValueSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueSource` <a name="putValueSource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.putValueSource"></a>

```java
public void putValueSource(GoogleCloudRunV2InstanceContainersEnvValueSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.putValueSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a>

---

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resetValue"></a>

```java
public void resetValue()
```

##### `resetValueSource` <a name="resetValueSource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resetValueSource"></a>

```java
public void resetValueSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueSource">valueSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference">GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueSourceInput">valueSourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueSource`<sup>Required</sup> <a name="valueSource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueSource"></a>

```java
public GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference getValueSource();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference">GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `valueSourceInput`<sup>Optional</sup> <a name="valueSourceInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueSourceInput"></a>

```java
public GoogleCloudRunV2InstanceContainersEnvValueSource getValueSourceInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCloudRunV2InstanceContainersEnv getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>

---


### GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference <a name="GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference;

new GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.putSecretKeyRef">putSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.resetSecretKeyRef">resetSecretKeyRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretKeyRef` <a name="putSecretKeyRef" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.putSecretKeyRef"></a>

```java
public void putSecretKeyRef(GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.putSecretKeyRef.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a>

---

##### `resetSecretKeyRef` <a name="resetSecretKeyRef" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.resetSecretKeyRef"></a>

```java
public void resetSecretKeyRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.secretKeyRef">secretKeyRef</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.secretKeyRefInput">secretKeyRefInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretKeyRef`<sup>Required</sup> <a name="secretKeyRef" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.secretKeyRef"></a>

```java
public GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference getSecretKeyRef();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference</a>

---

##### `secretKeyRefInput`<sup>Optional</sup> <a name="secretKeyRefInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.secretKeyRefInput"></a>

```java
public GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef getSecretKeyRefInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2InstanceContainersEnvValueSource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a>

---


### GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference <a name="GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference;

new GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput">secretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput"></a>

```java
public java.lang.String getSecretInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a>

---


### GoogleCloudRunV2InstanceContainersList <a name="GoogleCloudRunV2InstanceContainersList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersList;

new GoogleCloudRunV2InstanceContainersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.get"></a>

```java
public GoogleCloudRunV2InstanceContainersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleCloudRunV2InstanceContainers> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>>

---


### GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference <a name="GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference;

new GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetService` <a name="resetService" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resetService"></a>

```java
public void resetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2InstanceContainersLivenessProbeGrpc getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a>

---


### GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList <a name="GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList;

new GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.get"></a>

```java
public GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>>

---


### GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference <a name="GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference;

new GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>

---


### GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference <a name="GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference;

new GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.putHttpHeaders">putHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpHeaders` <a name="putHttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.putHttpHeaders"></a>

```java
public void putHttpHeaders(IResolvable|java.util.List<GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>>

---

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders"></a>

```java
public void resetHttpHeaders()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.httpHeaders">httpHeaders</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput">httpHeadersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.httpHeaders"></a>

```java
public GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList getHttpHeaders();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList</a>

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```java
public IResolvable|java.util.List<GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders> getHttpHeadersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders</a>>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a>

---


### GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference <a name="GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference;

new GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putGrpc">putGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putHttpGet">putHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetGrpc">resetGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetHttpGet">resetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetInitialDelaySeconds">resetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetPeriodSeconds">resetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGrpc` <a name="putGrpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putGrpc"></a>

```java
public void putGrpc(GoogleCloudRunV2InstanceContainersLivenessProbeGrpc value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putGrpc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a>

---

##### `putHttpGet` <a name="putHttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putHttpGet"></a>

```java
public void putHttpGet(GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a>

---

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetFailureThreshold"></a>

```java
public void resetFailureThreshold()
```

##### `resetGrpc` <a name="resetGrpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetGrpc"></a>

```java
public void resetGrpc()
```

##### `resetHttpGet` <a name="resetHttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetHttpGet"></a>

```java
public void resetHttpGet()
```

##### `resetInitialDelaySeconds` <a name="resetInitialDelaySeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetInitialDelaySeconds"></a>

```java
public void resetInitialDelaySeconds()
```

##### `resetPeriodSeconds` <a name="resetPeriodSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetPeriodSeconds"></a>

```java
public void resetPeriodSeconds()
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetTimeoutSeconds"></a>

```java
public void resetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.grpc">grpc</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.httpGet">httpGet</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.grpcInput">grpcInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.httpGetInput">httpGetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.initialDelaySecondsInput">initialDelaySecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.periodSecondsInput">periodSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `grpc`<sup>Required</sup> <a name="grpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.grpc"></a>

```java
public GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference getGrpc();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference</a>

---

##### `httpGet`<sup>Required</sup> <a name="httpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.httpGet"></a>

```java
public GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference getHttpGet();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference</a>

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.failureThresholdInput"></a>

```java
public java.lang.Number getFailureThresholdInput();
```

- *Type:* java.lang.Number

---

##### `grpcInput`<sup>Optional</sup> <a name="grpcInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.grpcInput"></a>

```java
public GoogleCloudRunV2InstanceContainersLivenessProbeGrpc getGrpcInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a>

---

##### `httpGetInput`<sup>Optional</sup> <a name="httpGetInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.httpGetInput"></a>

```java
public GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet getHttpGetInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a>

---

##### `initialDelaySecondsInput`<sup>Optional</sup> <a name="initialDelaySecondsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.initialDelaySecondsInput"></a>

```java
public java.lang.Number getInitialDelaySecondsInput();
```

- *Type:* java.lang.Number

---

##### `periodSecondsInput`<sup>Optional</sup> <a name="periodSecondsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.periodSecondsInput"></a>

```java
public java.lang.Number getPeriodSecondsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.timeoutSecondsInput"></a>

```java
public java.lang.Number getTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.failureThreshold"></a>

```java
public java.lang.Number getFailureThreshold();
```

- *Type:* java.lang.Number

---

##### `initialDelaySeconds`<sup>Required</sup> <a name="initialDelaySeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.initialDelaySeconds"></a>

```java
public java.lang.Number getInitialDelaySeconds();
```

- *Type:* java.lang.Number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2InstanceContainersLivenessProbe getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a>

---


### GoogleCloudRunV2InstanceContainersOutputReference <a name="GoogleCloudRunV2InstanceContainersOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersOutputReference;

new GoogleCloudRunV2InstanceContainersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putLivenessProbe">putLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putPorts">putPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putStartupProbe">putStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putVolumeMounts">putVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetLivenessProbe">resetLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetStartupProbe">resetStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetVolumeMounts">resetVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetWorkingDir">resetWorkingDir</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnv` <a name="putEnv" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putEnv"></a>

```java
public void putEnv(IResolvable|java.util.List<GoogleCloudRunV2InstanceContainersEnv> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putEnv.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>>

---

##### `putLivenessProbe` <a name="putLivenessProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putLivenessProbe"></a>

```java
public void putLivenessProbe(GoogleCloudRunV2InstanceContainersLivenessProbe value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putLivenessProbe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a>

---

##### `putPorts` <a name="putPorts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putPorts"></a>

```java
public void putPorts(IResolvable|java.util.List<GoogleCloudRunV2InstanceContainersPorts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putPorts.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>>

---

##### `putResources` <a name="putResources" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putResources"></a>

```java
public void putResources(GoogleCloudRunV2InstanceContainersResources value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a>

---

##### `putStartupProbe` <a name="putStartupProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putStartupProbe"></a>

```java
public void putStartupProbe(GoogleCloudRunV2InstanceContainersStartupProbe value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putStartupProbe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a>

---

##### `putVolumeMounts` <a name="putVolumeMounts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putVolumeMounts"></a>

```java
public void putVolumeMounts(IResolvable|java.util.List<GoogleCloudRunV2InstanceContainersVolumeMounts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>>

---

##### `resetArgs` <a name="resetArgs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetCommand"></a>

```java
public void resetCommand()
```

##### `resetEnv` <a name="resetEnv" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetEnv"></a>

```java
public void resetEnv()
```

##### `resetLivenessProbe` <a name="resetLivenessProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetLivenessProbe"></a>

```java
public void resetLivenessProbe()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPorts` <a name="resetPorts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetPorts"></a>

```java
public void resetPorts()
```

##### `resetResources` <a name="resetResources" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetResources"></a>

```java
public void resetResources()
```

##### `resetStartupProbe` <a name="resetStartupProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetStartupProbe"></a>

```java
public void resetStartupProbe()
```

##### `resetVolumeMounts` <a name="resetVolumeMounts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetVolumeMounts"></a>

```java
public void resetVolumeMounts()
```

##### `resetWorkingDir` <a name="resetWorkingDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetWorkingDir"></a>

```java
public void resetWorkingDir()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.env">env</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList">GoogleCloudRunV2InstanceContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.livenessProbe">livenessProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList">GoogleCloudRunV2InstanceContainersPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference">GoogleCloudRunV2InstanceContainersResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.startupProbe">startupProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.volumeMounts">volumeMounts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList">GoogleCloudRunV2InstanceContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.commandInput">commandInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.envInput">envInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.livenessProbeInput">livenessProbeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.portsInput">portsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.resourcesInput">resourcesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.startupProbeInput">startupProbeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.volumeMountsInput">volumeMountsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.workingDirInput">workingDirInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.workingDir">workingDir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.env"></a>

```java
public GoogleCloudRunV2InstanceContainersEnvList getEnv();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList">GoogleCloudRunV2InstanceContainersEnvList</a>

---

##### `livenessProbe`<sup>Required</sup> <a name="livenessProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.livenessProbe"></a>

```java
public GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference getLivenessProbe();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference</a>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.ports"></a>

```java
public GoogleCloudRunV2InstanceContainersPortsList getPorts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList">GoogleCloudRunV2InstanceContainersPortsList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.resources"></a>

```java
public GoogleCloudRunV2InstanceContainersResourcesOutputReference getResources();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference">GoogleCloudRunV2InstanceContainersResourcesOutputReference</a>

---

##### `startupProbe`<sup>Required</sup> <a name="startupProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.startupProbe"></a>

```java
public GoogleCloudRunV2InstanceContainersStartupProbeOutputReference getStartupProbe();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeOutputReference</a>

---

##### `volumeMounts`<sup>Required</sup> <a name="volumeMounts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.volumeMounts"></a>

```java
public GoogleCloudRunV2InstanceContainersVolumeMountsList getVolumeMounts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList">GoogleCloudRunV2InstanceContainersVolumeMountsList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.commandInput"></a>

```java
public java.util.List<java.lang.String> getCommandInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.envInput"></a>

```java
public IResolvable|java.util.List<GoogleCloudRunV2InstanceContainersEnv> getEnvInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv">GoogleCloudRunV2InstanceContainersEnv</a>>

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `livenessProbeInput`<sup>Optional</sup> <a name="livenessProbeInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.livenessProbeInput"></a>

```java
public GoogleCloudRunV2InstanceContainersLivenessProbe getLivenessProbeInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.portsInput"></a>

```java
public IResolvable|java.util.List<GoogleCloudRunV2InstanceContainersPorts> getPortsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.resourcesInput"></a>

```java
public GoogleCloudRunV2InstanceContainersResources getResourcesInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a>

---

##### `startupProbeInput`<sup>Optional</sup> <a name="startupProbeInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.startupProbeInput"></a>

```java
public GoogleCloudRunV2InstanceContainersStartupProbe getStartupProbeInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a>

---

##### `volumeMountsInput`<sup>Optional</sup> <a name="volumeMountsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.volumeMountsInput"></a>

```java
public IResolvable|java.util.List<GoogleCloudRunV2InstanceContainersVolumeMounts> getVolumeMountsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>>

---

##### `workingDirInput`<sup>Optional</sup> <a name="workingDirInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.workingDirInput"></a>

```java
public java.lang.String getWorkingDirInput();
```

- *Type:* java.lang.String

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `workingDir`<sup>Required</sup> <a name="workingDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.workingDir"></a>

```java
public java.lang.String getWorkingDir();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCloudRunV2InstanceContainers getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers">GoogleCloudRunV2InstanceContainers</a>

---


### GoogleCloudRunV2InstanceContainersPortsList <a name="GoogleCloudRunV2InstanceContainersPortsList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersPortsList;

new GoogleCloudRunV2InstanceContainersPortsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.get"></a>

```java
public GoogleCloudRunV2InstanceContainersPortsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleCloudRunV2InstanceContainersPorts> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>>

---


### GoogleCloudRunV2InstanceContainersPortsOutputReference <a name="GoogleCloudRunV2InstanceContainersPortsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersPortsOutputReference;

new GoogleCloudRunV2InstanceContainersPortsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resetContainerPort">resetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerPort` <a name="resetContainerPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resetContainerPort"></a>

```java
public void resetContainerPort()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.containerPortInput">containerPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.containerPortInput"></a>

```java
public java.lang.Number getContainerPortInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCloudRunV2InstanceContainersPorts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts">GoogleCloudRunV2InstanceContainersPorts</a>

---


### GoogleCloudRunV2InstanceContainersResourcesOutputReference <a name="GoogleCloudRunV2InstanceContainersResourcesOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference;

new GoogleCloudRunV2InstanceContainersResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.resetLimits">resetLimits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLimits` <a name="resetLimits" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.resetLimits"></a>

```java
public void resetLimits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.limitsInput">limitsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.limits">limits</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.limitsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLimitsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.limits"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLimits();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2InstanceContainersResources getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a>

---


### GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference <a name="GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference;

new GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetService` <a name="resetService" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resetService"></a>

```java
public void resetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2InstanceContainersStartupProbeGrpc getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a>

---


### GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList <a name="GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList;

new GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.get"></a>

```java
public GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>>

---


### GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference <a name="GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference;

new GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>

---


### GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference <a name="GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference;

new GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.putHttpHeaders">putHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpHeaders` <a name="putHttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.putHttpHeaders"></a>

```java
public void putHttpHeaders(IResolvable|java.util.List<GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>>

---

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetHttpHeaders"></a>

```java
public void resetHttpHeaders()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.httpHeaders">httpHeaders</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput">httpHeadersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.httpHeaders"></a>

```java
public GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList getHttpHeaders();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList</a>

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```java
public IResolvable|java.util.List<GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders> getHttpHeadersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders</a>>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2InstanceContainersStartupProbeHttpGet getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a>

---


### GoogleCloudRunV2InstanceContainersStartupProbeOutputReference <a name="GoogleCloudRunV2InstanceContainersStartupProbeOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference;

new GoogleCloudRunV2InstanceContainersStartupProbeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putGrpc">putGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putHttpGet">putHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putTcpSocket">putTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetGrpc">resetGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetHttpGet">resetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetInitialDelaySeconds">resetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetPeriodSeconds">resetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetTcpSocket">resetTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGrpc` <a name="putGrpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putGrpc"></a>

```java
public void putGrpc(GoogleCloudRunV2InstanceContainersStartupProbeGrpc value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putGrpc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a>

---

##### `putHttpGet` <a name="putHttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putHttpGet"></a>

```java
public void putHttpGet(GoogleCloudRunV2InstanceContainersStartupProbeHttpGet value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a>

---

##### `putTcpSocket` <a name="putTcpSocket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putTcpSocket"></a>

```java
public void putTcpSocket(GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putTcpSocket.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a>

---

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetFailureThreshold"></a>

```java
public void resetFailureThreshold()
```

##### `resetGrpc` <a name="resetGrpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetGrpc"></a>

```java
public void resetGrpc()
```

##### `resetHttpGet` <a name="resetHttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetHttpGet"></a>

```java
public void resetHttpGet()
```

##### `resetInitialDelaySeconds` <a name="resetInitialDelaySeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetInitialDelaySeconds"></a>

```java
public void resetInitialDelaySeconds()
```

##### `resetPeriodSeconds` <a name="resetPeriodSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetPeriodSeconds"></a>

```java
public void resetPeriodSeconds()
```

##### `resetTcpSocket` <a name="resetTcpSocket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetTcpSocket"></a>

```java
public void resetTcpSocket()
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetTimeoutSeconds"></a>

```java
public void resetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.grpc">grpc</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.httpGet">httpGet</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.tcpSocket">tcpSocket</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.grpcInput">grpcInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.httpGetInput">httpGetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.initialDelaySecondsInput">initialDelaySecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.periodSecondsInput">periodSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.tcpSocketInput">tcpSocketInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `grpc`<sup>Required</sup> <a name="grpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.grpc"></a>

```java
public GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference getGrpc();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference</a>

---

##### `httpGet`<sup>Required</sup> <a name="httpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.httpGet"></a>

```java
public GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference getHttpGet();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference</a>

---

##### `tcpSocket`<sup>Required</sup> <a name="tcpSocket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.tcpSocket"></a>

```java
public GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference getTcpSocket();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference</a>

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.failureThresholdInput"></a>

```java
public java.lang.Number getFailureThresholdInput();
```

- *Type:* java.lang.Number

---

##### `grpcInput`<sup>Optional</sup> <a name="grpcInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.grpcInput"></a>

```java
public GoogleCloudRunV2InstanceContainersStartupProbeGrpc getGrpcInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a>

---

##### `httpGetInput`<sup>Optional</sup> <a name="httpGetInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.httpGetInput"></a>

```java
public GoogleCloudRunV2InstanceContainersStartupProbeHttpGet getHttpGetInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a>

---

##### `initialDelaySecondsInput`<sup>Optional</sup> <a name="initialDelaySecondsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.initialDelaySecondsInput"></a>

```java
public java.lang.Number getInitialDelaySecondsInput();
```

- *Type:* java.lang.Number

---

##### `periodSecondsInput`<sup>Optional</sup> <a name="periodSecondsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.periodSecondsInput"></a>

```java
public java.lang.Number getPeriodSecondsInput();
```

- *Type:* java.lang.Number

---

##### `tcpSocketInput`<sup>Optional</sup> <a name="tcpSocketInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.tcpSocketInput"></a>

```java
public GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket getTcpSocketInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a>

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.timeoutSecondsInput"></a>

```java
public java.lang.Number getTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.failureThreshold"></a>

```java
public java.lang.Number getFailureThreshold();
```

- *Type:* java.lang.Number

---

##### `initialDelaySeconds`<sup>Required</sup> <a name="initialDelaySeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.initialDelaySeconds"></a>

```java
public java.lang.Number getInitialDelaySeconds();
```

- *Type:* java.lang.Number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2InstanceContainersStartupProbe getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a>

---


### GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference <a name="GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference;

new GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a>

---


### GoogleCloudRunV2InstanceContainerStatusesList <a name="GoogleCloudRunV2InstanceContainerStatusesList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainerStatusesList;

new GoogleCloudRunV2InstanceContainerStatusesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.get"></a>

```java
public GoogleCloudRunV2InstanceContainerStatusesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleCloudRunV2InstanceContainerStatusesOutputReference <a name="GoogleCloudRunV2InstanceContainerStatusesOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference;

new GoogleCloudRunV2InstanceContainerStatusesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.imageDigest">imageDigest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatuses">GoogleCloudRunV2InstanceContainerStatuses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.imageDigest"></a>

```java
public java.lang.String getImageDigest();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2InstanceContainerStatuses getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatuses">GoogleCloudRunV2InstanceContainerStatuses</a>

---


### GoogleCloudRunV2InstanceContainersVolumeMountsList <a name="GoogleCloudRunV2InstanceContainersVolumeMountsList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersVolumeMountsList;

new GoogleCloudRunV2InstanceContainersVolumeMountsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.get"></a>

```java
public GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleCloudRunV2InstanceContainersVolumeMounts> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>>

---


### GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference <a name="GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference;

new GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.resetSubPath">resetSubPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubPath` <a name="resetSubPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.resetSubPath"></a>

```java
public void resetSubPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.subPathInput">subPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.subPath">subPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```java
public java.lang.String getMountPathInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `subPathInput`<sup>Optional</sup> <a name="subPathInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.subPathInput"></a>

```java
public java.lang.String getSubPathInput();
```

- *Type:* java.lang.String

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `subPath`<sup>Required</sup> <a name="subPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.subPath"></a>

```java
public java.lang.String getSubPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCloudRunV2InstanceContainersVolumeMounts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts">GoogleCloudRunV2InstanceContainersVolumeMounts</a>

---


### GoogleCloudRunV2InstanceTerminalConditionList <a name="GoogleCloudRunV2InstanceTerminalConditionList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceTerminalConditionList;

new GoogleCloudRunV2InstanceTerminalConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.get"></a>

```java
public GoogleCloudRunV2InstanceTerminalConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleCloudRunV2InstanceTerminalConditionOutputReference <a name="GoogleCloudRunV2InstanceTerminalConditionOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference;

new GoogleCloudRunV2InstanceTerminalConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.instanceReason">instanceReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalCondition">GoogleCloudRunV2InstanceTerminalCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceReason`<sup>Required</sup> <a name="instanceReason" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.instanceReason"></a>

```java
public java.lang.String getInstanceReason();
```

- *Type:* java.lang.String

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.lastTransitionTime"></a>

```java
public java.lang.String getLastTransitionTime();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2InstanceTerminalCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalCondition">GoogleCloudRunV2InstanceTerminalCondition</a>

---


### GoogleCloudRunV2InstanceTimeoutsOutputReference <a name="GoogleCloudRunV2InstanceTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceTimeoutsOutputReference;

new GoogleCloudRunV2InstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCloudRunV2InstanceTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a>

---


### GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference <a name="GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference;

new GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resetInstances">resetInstances</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstances` <a name="resetInstances" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resetInstances"></a>

```java
public void resetInstances()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.instancesInput">instancesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.instances">instances</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.instancesInput"></a>

```java
public java.util.List<java.lang.String> getInstancesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.instances"></a>

```java
public java.util.List<java.lang.String> getInstances();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2InstanceVolumesCloudSqlInstance getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a>

---


### GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference <a name="GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference;

new GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resetMedium">resetMedium</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resetSizeLimit">resetSizeLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMedium` <a name="resetMedium" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resetMedium"></a>

```java
public void resetMedium()
```

##### `resetSizeLimit` <a name="resetSizeLimit" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resetSizeLimit"></a>

```java
public void resetSizeLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.mediumInput">mediumInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.sizeLimitInput">sizeLimitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.medium">medium</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.sizeLimit">sizeLimit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mediumInput`<sup>Optional</sup> <a name="mediumInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.mediumInput"></a>

```java
public java.lang.String getMediumInput();
```

- *Type:* java.lang.String

---

##### `sizeLimitInput`<sup>Optional</sup> <a name="sizeLimitInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.sizeLimitInput"></a>

```java
public java.lang.String getSizeLimitInput();
```

- *Type:* java.lang.String

---

##### `medium`<sup>Required</sup> <a name="medium" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.medium"></a>

```java
public java.lang.String getMedium();
```

- *Type:* java.lang.String

---

##### `sizeLimit`<sup>Required</sup> <a name="sizeLimit" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.sizeLimit"></a>

```java
public java.lang.String getSizeLimit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2InstanceVolumesEmptyDir getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a>

---


### GoogleCloudRunV2InstanceVolumesGcsOutputReference <a name="GoogleCloudRunV2InstanceVolumesGcsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference;

new GoogleCloudRunV2InstanceVolumesGcsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resetMountOptions">resetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resetMountOptions"></a>

```java
public void resetMountOptions()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.mountOptionsInput">mountOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.mountOptions">mountOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.mountOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMountOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Boolean|IResolvable getReadOnlyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.mountOptions"></a>

```java
public java.util.List<java.lang.String> getMountOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.readOnly"></a>

```java
public java.lang.Boolean|IResolvable getReadOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2InstanceVolumesGcs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a>

---


### GoogleCloudRunV2InstanceVolumesList <a name="GoogleCloudRunV2InstanceVolumesList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceVolumesList;

new GoogleCloudRunV2InstanceVolumesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.get"></a>

```java
public GoogleCloudRunV2InstanceVolumesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleCloudRunV2InstanceVolumes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>>

---


### GoogleCloudRunV2InstanceVolumesNfsOutputReference <a name="GoogleCloudRunV2InstanceVolumesNfsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference;

new GoogleCloudRunV2InstanceVolumesNfsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.serverInput">serverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.server">server</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Boolean|IResolvable getReadOnlyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.serverInput"></a>

```java
public java.lang.String getServerInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.readOnly"></a>

```java
public java.lang.Boolean|IResolvable getReadOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2InstanceVolumesNfs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a>

---


### GoogleCloudRunV2InstanceVolumesOutputReference <a name="GoogleCloudRunV2InstanceVolumesOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceVolumesOutputReference;

new GoogleCloudRunV2InstanceVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putCloudSqlInstance">putCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putEmptyDir">putEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putGcs">putGcs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putNfs">putNfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetCloudSqlInstance">resetCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetEmptyDir">resetEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetGcs">resetGcs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetNfs">resetNfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetSecret">resetSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudSqlInstance` <a name="putCloudSqlInstance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putCloudSqlInstance"></a>

```java
public void putCloudSqlInstance(GoogleCloudRunV2InstanceVolumesCloudSqlInstance value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putCloudSqlInstance.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a>

---

##### `putEmptyDir` <a name="putEmptyDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putEmptyDir"></a>

```java
public void putEmptyDir(GoogleCloudRunV2InstanceVolumesEmptyDir value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putEmptyDir.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a>

---

##### `putGcs` <a name="putGcs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putGcs"></a>

```java
public void putGcs(GoogleCloudRunV2InstanceVolumesGcs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putGcs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a>

---

##### `putNfs` <a name="putNfs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putNfs"></a>

```java
public void putNfs(GoogleCloudRunV2InstanceVolumesNfs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putNfs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a>

---

##### `putSecret` <a name="putSecret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putSecret"></a>

```java
public void putSecret(GoogleCloudRunV2InstanceVolumesSecret value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a>

---

##### `resetCloudSqlInstance` <a name="resetCloudSqlInstance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetCloudSqlInstance"></a>

```java
public void resetCloudSqlInstance()
```

##### `resetEmptyDir` <a name="resetEmptyDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetEmptyDir"></a>

```java
public void resetEmptyDir()
```

##### `resetGcs` <a name="resetGcs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetGcs"></a>

```java
public void resetGcs()
```

##### `resetNfs` <a name="resetNfs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetNfs"></a>

```java
public void resetNfs()
```

##### `resetSecret` <a name="resetSecret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetSecret"></a>

```java
public void resetSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.cloudSqlInstance">cloudSqlInstance</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference">GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.emptyDir">emptyDir</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference">GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.gcs">gcs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference">GoogleCloudRunV2InstanceVolumesGcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference">GoogleCloudRunV2InstanceVolumesNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference">GoogleCloudRunV2InstanceVolumesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.cloudSqlInstanceInput">cloudSqlInstanceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.emptyDirInput">emptyDirInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.gcsInput">gcsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nfsInput">nfsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.secretInput">secretInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudSqlInstance`<sup>Required</sup> <a name="cloudSqlInstance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.cloudSqlInstance"></a>

```java
public GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference getCloudSqlInstance();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference">GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference</a>

---

##### `emptyDir`<sup>Required</sup> <a name="emptyDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.emptyDir"></a>

```java
public GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference getEmptyDir();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference">GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference</a>

---

##### `gcs`<sup>Required</sup> <a name="gcs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.gcs"></a>

```java
public GoogleCloudRunV2InstanceVolumesGcsOutputReference getGcs();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference">GoogleCloudRunV2InstanceVolumesGcsOutputReference</a>

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nfs"></a>

```java
public GoogleCloudRunV2InstanceVolumesNfsOutputReference getNfs();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference">GoogleCloudRunV2InstanceVolumesNfsOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.secret"></a>

```java
public GoogleCloudRunV2InstanceVolumesSecretOutputReference getSecret();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference">GoogleCloudRunV2InstanceVolumesSecretOutputReference</a>

---

##### `cloudSqlInstanceInput`<sup>Optional</sup> <a name="cloudSqlInstanceInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.cloudSqlInstanceInput"></a>

```java
public GoogleCloudRunV2InstanceVolumesCloudSqlInstance getCloudSqlInstanceInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a>

---

##### `emptyDirInput`<sup>Optional</sup> <a name="emptyDirInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.emptyDirInput"></a>

```java
public GoogleCloudRunV2InstanceVolumesEmptyDir getEmptyDirInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a>

---

##### `gcsInput`<sup>Optional</sup> <a name="gcsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.gcsInput"></a>

```java
public GoogleCloudRunV2InstanceVolumesGcs getGcsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nfsInput`<sup>Optional</sup> <a name="nfsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nfsInput"></a>

```java
public GoogleCloudRunV2InstanceVolumesNfs getNfsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a>

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.secretInput"></a>

```java
public GoogleCloudRunV2InstanceVolumesSecret getSecretInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCloudRunV2InstanceVolumes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes">GoogleCloudRunV2InstanceVolumes</a>

---


### GoogleCloudRunV2InstanceVolumesSecretItemsList <a name="GoogleCloudRunV2InstanceVolumesSecretItemsList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceVolumesSecretItemsList;

new GoogleCloudRunV2InstanceVolumesSecretItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.get"></a>

```java
public GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleCloudRunV2InstanceVolumesSecretItems> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>>

---


### GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference <a name="GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference;

new GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.mode">mode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.modeInput"></a>

```java
public java.lang.Number getModeInput();
```

- *Type:* java.lang.Number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.mode"></a>

```java
public java.lang.Number getMode();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCloudRunV2InstanceVolumesSecretItems getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>

---


### GoogleCloudRunV2InstanceVolumesSecretOutputReference <a name="GoogleCloudRunV2InstanceVolumesSecretOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_run_v2_instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference;

new GoogleCloudRunV2InstanceVolumesSecretOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.putItems">putItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resetDefaultMode">resetDefaultMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resetItems">resetItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.putItems"></a>

```java
public void putItems(IResolvable|java.util.List<GoogleCloudRunV2InstanceVolumesSecretItems> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.putItems.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>>

---

##### `resetDefaultMode` <a name="resetDefaultMode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resetDefaultMode"></a>

```java
public void resetDefaultMode()
```

##### `resetItems` <a name="resetItems" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resetItems"></a>

```java
public void resetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.items">items</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList">GoogleCloudRunV2InstanceVolumesSecretItemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.defaultModeInput">defaultModeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.itemsInput">itemsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.secretInput">secretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.defaultMode">defaultMode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.items"></a>

```java
public GoogleCloudRunV2InstanceVolumesSecretItemsList getItems();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList">GoogleCloudRunV2InstanceVolumesSecretItemsList</a>

---

##### `defaultModeInput`<sup>Optional</sup> <a name="defaultModeInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.defaultModeInput"></a>

```java
public java.lang.Number getDefaultModeInput();
```

- *Type:* java.lang.Number

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.itemsInput"></a>

```java
public IResolvable|java.util.List<GoogleCloudRunV2InstanceVolumesSecretItems> getItemsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems">GoogleCloudRunV2InstanceVolumesSecretItems</a>>

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.secretInput"></a>

```java
public java.lang.String getSecretInput();
```

- *Type:* java.lang.String

---

##### `defaultMode`<sup>Required</sup> <a name="defaultMode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.defaultMode"></a>

```java
public java.lang.Number getDefaultMode();
```

- *Type:* java.lang.Number

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.internalValue"></a>

```java
public GoogleCloudRunV2InstanceVolumesSecret getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a>

---



