# `googleNetworkServicesAuthzExtension` Submodule <a name="`googleNetworkServicesAuthzExtension` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesAuthzExtension <a name="GoogleNetworkServicesAuthzExtension" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension google_network_services_authz_extension}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_authz_extension.GoogleNetworkServicesAuthzExtension;

GoogleNetworkServicesAuthzExtension.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .service(java.lang.String)
    .timeout(java.lang.String)
//  .authority(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .failOpen(java.lang.Boolean|IResolvable)
//  .forwardHeaders(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .loadBalancingScheme(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkServicesAuthzExtensionTimeouts)
//  .wireFormat(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Identifier. Name of the AuthzExtension resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.service">service</a></code> | <code>java.lang.String</code> | The service that runs the extension. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.timeout">timeout</a></code> | <code>java.lang.String</code> | Specifies the timeout for each individual message on the stream. The timeout must be between 10-10000 milliseconds. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.authority">authority</a></code> | <code>java.lang.String</code> | The :authority header in the gRPC request sent from Envoy to the extension service. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.failOpen">failOpen</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines how the proxy behaves if the call to the extension fails or times out. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.forwardHeaders">forwardHeaders</a></code> | <code>java.util.List<java.lang.String></code> | List of the HTTP headers to forward to the extension (from the client). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#id GoogleNetworkServicesAuthzExtension#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of labels associated with the AuthzExtension resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | Required when the service points to a backend service. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The metadata provided here is included as part of the metadata_context (of type google.protobuf.Struct) in the ProcessingRequest message sent to the extension server. The metadata is available under the namespace com.google.authz_extension.<resourceName>. The following variables are supported in the metadata Struct:. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#project GoogleNetworkServicesAuthzExtension#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts">GoogleNetworkServicesAuthzExtensionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.wireFormat">wireFormat</a></code> | <code>java.lang.String</code> | The format of communication supported by the callout extension. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#location GoogleNetworkServicesAuthzExtension#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Identifier. Name of the AuthzExtension resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#name GoogleNetworkServicesAuthzExtension#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.service"></a>

- *Type:* java.lang.String

The service that runs the extension.

The following values and formats are accepted:

* 'iap.googleapis.com' when the policyProfile is set to REQUEST_AUTHZ
* 'modelarmor.{{region}}.rep.googleapis.com' when the policyProfile is set to CONTENT_AUTHZ
* A fully qualified domain name that can be resolved by the dataplane
* Backend service resource URI of the form 'https://www.googleapis.com/compute/v1/projects/{{project}}/regions/{{region}}/backendServices/{{name}}' or 'https://www.googleapis.com/compute/v1/projects/{{project}}/global/backendServices/{{name}}}}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#service GoogleNetworkServicesAuthzExtension#service}

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.timeout"></a>

- *Type:* java.lang.String

Specifies the timeout for each individual message on the stream. The timeout must be between 10-10000 milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#timeout GoogleNetworkServicesAuthzExtension#timeout}

---

##### `authority`<sup>Optional</sup> <a name="authority" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.authority"></a>

- *Type:* java.lang.String

The :authority header in the gRPC request sent from Envoy to the extension service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#authority GoogleNetworkServicesAuthzExtension#authority}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#deletion_policy GoogleNetworkServicesAuthzExtension#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#description GoogleNetworkServicesAuthzExtension#description}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.failOpen"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines how the proxy behaves if the call to the extension fails or times out.

When set to TRUE, request or response processing continues without error. Any subsequent extensions in the extension chain are also executed. When set to FALSE or the default setting of FALSE is used, one of the following happens:

* If response headers have not been delivered to the downstream client, a generic 500 error is returned to the client. The error response can be tailored by configuring a custom error response in the load balancer.
* If response headers have been delivered, then the HTTP stream to the downstream client is reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#fail_open GoogleNetworkServicesAuthzExtension#fail_open}

---

##### `forwardHeaders`<sup>Optional</sup> <a name="forwardHeaders" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.forwardHeaders"></a>

- *Type:* java.util.List<java.lang.String>

List of the HTTP headers to forward to the extension (from the client).

If omitted, all headers are sent. Each element is a string indicating the header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#forward_headers GoogleNetworkServicesAuthzExtension#forward_headers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#id GoogleNetworkServicesAuthzExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of labels associated with the AuthzExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#labels GoogleNetworkServicesAuthzExtension#labels}

---

##### `loadBalancingScheme`<sup>Optional</sup> <a name="loadBalancingScheme" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.loadBalancingScheme"></a>

- *Type:* java.lang.String

Required when the service points to a backend service.

All backend services and forwarding rules referenced by
this extension must share the same load balancing scheme. For more information, refer to
[Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#load_balancing_scheme GoogleNetworkServicesAuthzExtension#load_balancing_scheme}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The metadata provided here is included as part of the metadata_context (of type google.protobuf.Struct) in the ProcessingRequest message sent to the extension server. The metadata is available under the namespace com.google.authz_extension.<resourceName>. The following variables are supported in the metadata Struct:.

{forwarding_rule_id} - substituted with the forwarding rule's fully qualified resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#metadata GoogleNetworkServicesAuthzExtension#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#project GoogleNetworkServicesAuthzExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts">GoogleNetworkServicesAuthzExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#timeouts GoogleNetworkServicesAuthzExtension#timeouts}

---

##### `wireFormat`<sup>Optional</sup> <a name="wireFormat" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.Initializer.parameter.wireFormat"></a>

- *Type:* java.lang.String

The format of communication supported by the callout extension.

Applicable only when the policyProfile is REQUEST_AUTHZ.
This field is supported only for regional AuthzExtension resources. If not specified, the default value
EXT_PROC_GRPC is used. Global AuthzExtension resources use the EXT_PROC_GRPC wire format.

Supported values:

* WIRE_FORMAT_UNSPECIFIED:
  No wire format is explicitly specified. The backend automatically
  defaults this value to EXT_PROC_GRPC.
* EXT_PROC_GRPC:
  Uses Envoy's External Processing (ext_proc) gRPC API over a single
  gRPC stream. The backend service must support HTTP/2 or H2C.
  All supported events for a client request are sent over the same
  gRPC stream. This is the default wire format.
* EXT_AUTHZ_GRPC:
  Uses Envoy's external authorization (ext_authz) gRPC API.
  The backend service must support HTTP/2 or H2C.
  This option is only supported for regional AuthzExtension resources. Possible values: ["WIRE_FORMAT_UNSPECIFIED", "EXT_PROC_GRPC", "EXT_AUTHZ_GRPC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#wire_format GoogleNetworkServicesAuthzExtension#wire_format}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetAuthority">resetAuthority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetFailOpen">resetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetForwardHeaders">resetForwardHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetLoadBalancingScheme">resetLoadBalancingScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetWireFormat">resetWireFormat</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkServicesAuthzExtensionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts">GoogleNetworkServicesAuthzExtensionTimeouts</a>

---

##### `resetAuthority` <a name="resetAuthority" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetAuthority"></a>

```java
public void resetAuthority()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFailOpen` <a name="resetFailOpen" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetFailOpen"></a>

```java
public void resetFailOpen()
```

##### `resetForwardHeaders` <a name="resetForwardHeaders" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetForwardHeaders"></a>

```java
public void resetForwardHeaders()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLoadBalancingScheme` <a name="resetLoadBalancingScheme" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetLoadBalancingScheme"></a>

```java
public void resetLoadBalancingScheme()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWireFormat` <a name="resetWireFormat" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.resetWireFormat"></a>

```java
public void resetWireFormat()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesAuthzExtension resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_authz_extension.GoogleNetworkServicesAuthzExtension;

GoogleNetworkServicesAuthzExtension.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_authz_extension.GoogleNetworkServicesAuthzExtension;

GoogleNetworkServicesAuthzExtension.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_authz_extension.GoogleNetworkServicesAuthzExtension;

GoogleNetworkServicesAuthzExtension.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_authz_extension.GoogleNetworkServicesAuthzExtension;

GoogleNetworkServicesAuthzExtension.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkServicesAuthzExtension.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleNetworkServicesAuthzExtension resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkServicesAuthzExtension to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkServicesAuthzExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesAuthzExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference">GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.authorityInput">authorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.failOpenInput">failOpenInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.forwardHeadersInput">forwardHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.loadBalancingSchemeInput">loadBalancingSchemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts">GoogleNetworkServicesAuthzExtensionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.wireFormatInput">wireFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.authority">authority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.failOpen">failOpen</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.forwardHeaders">forwardHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.timeout">timeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.wireFormat">wireFormat</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.timeouts"></a>

```java
public GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference">GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `authorityInput`<sup>Optional</sup> <a name="authorityInput" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.authorityInput"></a>

```java
public java.lang.String getAuthorityInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `failOpenInput`<sup>Optional</sup> <a name="failOpenInput" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.failOpenInput"></a>

```java
public java.lang.Boolean|IResolvable getFailOpenInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forwardHeadersInput`<sup>Optional</sup> <a name="forwardHeadersInput" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.forwardHeadersInput"></a>

```java
public java.util.List<java.lang.String> getForwardHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `loadBalancingSchemeInput`<sup>Optional</sup> <a name="loadBalancingSchemeInput" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.loadBalancingSchemeInput"></a>

```java
public java.lang.String getLoadBalancingSchemeInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.timeoutInput"></a>

```java
public java.lang.String getTimeoutInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.timeoutsInput"></a>

```java
public IResolvable|GoogleNetworkServicesAuthzExtensionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts">GoogleNetworkServicesAuthzExtensionTimeouts</a>

---

##### `wireFormatInput`<sup>Optional</sup> <a name="wireFormatInput" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.wireFormatInput"></a>

```java
public java.lang.String getWireFormatInput();
```

- *Type:* java.lang.String

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.authority"></a>

```java
public java.lang.String getAuthority();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `failOpen`<sup>Required</sup> <a name="failOpen" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.failOpen"></a>

```java
public java.lang.Boolean|IResolvable getFailOpen();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forwardHeaders`<sup>Required</sup> <a name="forwardHeaders" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.forwardHeaders"></a>

```java
public java.util.List<java.lang.String> getForwardHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.loadBalancingScheme"></a>

```java
public java.lang.String getLoadBalancingScheme();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

---

##### `wireFormat`<sup>Required</sup> <a name="wireFormat" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.wireFormat"></a>

```java
public java.lang.String getWireFormat();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtension.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesAuthzExtensionConfig <a name="GoogleNetworkServicesAuthzExtensionConfig" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_authz_extension.GoogleNetworkServicesAuthzExtensionConfig;

GoogleNetworkServicesAuthzExtensionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .service(java.lang.String)
    .timeout(java.lang.String)
//  .authority(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .failOpen(java.lang.Boolean|IResolvable)
//  .forwardHeaders(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .loadBalancingScheme(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkServicesAuthzExtensionTimeouts)
//  .wireFormat(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Identifier. Name of the AuthzExtension resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.service">service</a></code> | <code>java.lang.String</code> | The service that runs the extension. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.timeout">timeout</a></code> | <code>java.lang.String</code> | Specifies the timeout for each individual message on the stream. The timeout must be between 10-10000 milliseconds. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.authority">authority</a></code> | <code>java.lang.String</code> | The :authority header in the gRPC request sent from Envoy to the extension service. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.failOpen">failOpen</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines how the proxy behaves if the call to the extension fails or times out. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.forwardHeaders">forwardHeaders</a></code> | <code>java.util.List<java.lang.String></code> | List of the HTTP headers to forward to the extension (from the client). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#id GoogleNetworkServicesAuthzExtension#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of labels associated with the AuthzExtension resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | Required when the service points to a backend service. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The metadata provided here is included as part of the metadata_context (of type google.protobuf.Struct) in the ProcessingRequest message sent to the extension server. The metadata is available under the namespace com.google.authz_extension.<resourceName>. The following variables are supported in the metadata Struct:. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#project GoogleNetworkServicesAuthzExtension#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts">GoogleNetworkServicesAuthzExtensionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.wireFormat">wireFormat</a></code> | <code>java.lang.String</code> | The format of communication supported by the callout extension. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#location GoogleNetworkServicesAuthzExtension#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Identifier. Name of the AuthzExtension resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#name GoogleNetworkServicesAuthzExtension#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The service that runs the extension.

The following values and formats are accepted:

* 'iap.googleapis.com' when the policyProfile is set to REQUEST_AUTHZ
* 'modelarmor.{{region}}.rep.googleapis.com' when the policyProfile is set to CONTENT_AUTHZ
* A fully qualified domain name that can be resolved by the dataplane
* Backend service resource URI of the form 'https://www.googleapis.com/compute/v1/projects/{{project}}/regions/{{region}}/backendServices/{{name}}' or 'https://www.googleapis.com/compute/v1/projects/{{project}}/global/backendServices/{{name}}}}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#service GoogleNetworkServicesAuthzExtension#service}

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

Specifies the timeout for each individual message on the stream. The timeout must be between 10-10000 milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#timeout GoogleNetworkServicesAuthzExtension#timeout}

---

##### `authority`<sup>Optional</sup> <a name="authority" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.authority"></a>

```java
public java.lang.String getAuthority();
```

- *Type:* java.lang.String

The :authority header in the gRPC request sent from Envoy to the extension service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#authority GoogleNetworkServicesAuthzExtension#authority}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#deletion_policy GoogleNetworkServicesAuthzExtension#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#description GoogleNetworkServicesAuthzExtension#description}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.failOpen"></a>

```java
public java.lang.Boolean|IResolvable getFailOpen();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines how the proxy behaves if the call to the extension fails or times out.

When set to TRUE, request or response processing continues without error. Any subsequent extensions in the extension chain are also executed. When set to FALSE or the default setting of FALSE is used, one of the following happens:

* If response headers have not been delivered to the downstream client, a generic 500 error is returned to the client. The error response can be tailored by configuring a custom error response in the load balancer.
* If response headers have been delivered, then the HTTP stream to the downstream client is reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#fail_open GoogleNetworkServicesAuthzExtension#fail_open}

---

##### `forwardHeaders`<sup>Optional</sup> <a name="forwardHeaders" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.forwardHeaders"></a>

```java
public java.util.List<java.lang.String> getForwardHeaders();
```

- *Type:* java.util.List<java.lang.String>

List of the HTTP headers to forward to the extension (from the client).

If omitted, all headers are sent. Each element is a string indicating the header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#forward_headers GoogleNetworkServicesAuthzExtension#forward_headers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#id GoogleNetworkServicesAuthzExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of labels associated with the AuthzExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#labels GoogleNetworkServicesAuthzExtension#labels}

---

##### `loadBalancingScheme`<sup>Optional</sup> <a name="loadBalancingScheme" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.loadBalancingScheme"></a>

```java
public java.lang.String getLoadBalancingScheme();
```

- *Type:* java.lang.String

Required when the service points to a backend service.

All backend services and forwarding rules referenced by
this extension must share the same load balancing scheme. For more information, refer to
[Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#load_balancing_scheme GoogleNetworkServicesAuthzExtension#load_balancing_scheme}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The metadata provided here is included as part of the metadata_context (of type google.protobuf.Struct) in the ProcessingRequest message sent to the extension server. The metadata is available under the namespace com.google.authz_extension.<resourceName>. The following variables are supported in the metadata Struct:.

{forwarding_rule_id} - substituted with the forwarding rule's fully qualified resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#metadata GoogleNetworkServicesAuthzExtension#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#project GoogleNetworkServicesAuthzExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.timeouts"></a>

```java
public GoogleNetworkServicesAuthzExtensionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts">GoogleNetworkServicesAuthzExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#timeouts GoogleNetworkServicesAuthzExtension#timeouts}

---

##### `wireFormat`<sup>Optional</sup> <a name="wireFormat" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionConfig.property.wireFormat"></a>

```java
public java.lang.String getWireFormat();
```

- *Type:* java.lang.String

The format of communication supported by the callout extension.

Applicable only when the policyProfile is REQUEST_AUTHZ.
This field is supported only for regional AuthzExtension resources. If not specified, the default value
EXT_PROC_GRPC is used. Global AuthzExtension resources use the EXT_PROC_GRPC wire format.

Supported values:

* WIRE_FORMAT_UNSPECIFIED:
  No wire format is explicitly specified. The backend automatically
  defaults this value to EXT_PROC_GRPC.
* EXT_PROC_GRPC:
  Uses Envoy's External Processing (ext_proc) gRPC API over a single
  gRPC stream. The backend service must support HTTP/2 or H2C.
  All supported events for a client request are sent over the same
  gRPC stream. This is the default wire format.
* EXT_AUTHZ_GRPC:
  Uses Envoy's external authorization (ext_authz) gRPC API.
  The backend service must support HTTP/2 or H2C.
  This option is only supported for regional AuthzExtension resources. Possible values: ["WIRE_FORMAT_UNSPECIFIED", "EXT_PROC_GRPC", "EXT_AUTHZ_GRPC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#wire_format GoogleNetworkServicesAuthzExtension#wire_format}

---

### GoogleNetworkServicesAuthzExtensionTimeouts <a name="GoogleNetworkServicesAuthzExtensionTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_authz_extension.GoogleNetworkServicesAuthzExtensionTimeouts;

GoogleNetworkServicesAuthzExtensionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#create GoogleNetworkServicesAuthzExtension#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#delete GoogleNetworkServicesAuthzExtension#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#update GoogleNetworkServicesAuthzExtension#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#create GoogleNetworkServicesAuthzExtension#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#delete GoogleNetworkServicesAuthzExtension#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_authz_extension#update GoogleNetworkServicesAuthzExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference <a name="GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_authz_extension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference;

new GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts">GoogleNetworkServicesAuthzExtensionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleNetworkServicesAuthzExtensionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesAuthzExtension.GoogleNetworkServicesAuthzExtensionTimeouts">GoogleNetworkServicesAuthzExtensionTimeouts</a>

---



