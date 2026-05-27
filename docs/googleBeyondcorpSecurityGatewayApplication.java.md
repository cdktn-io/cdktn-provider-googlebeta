# `googleBeyondcorpSecurityGatewayApplication` Submodule <a name="`googleBeyondcorpSecurityGatewayApplication` Submodule" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBeyondcorpSecurityGatewayApplication <a name="GoogleBeyondcorpSecurityGatewayApplication" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application google_beyondcorp_security_gateway_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplication;

GoogleBeyondcorpSecurityGatewayApplication.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .securityGatewayId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .endpointMatchers(IResolvable|java.util.List<GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .schema(java.lang.String)
//  .timeouts(GoogleBeyondcorpSecurityGatewayApplicationTimeouts)
//  .upstreams(IResolvable|java.util.List<GoogleBeyondcorpSecurityGatewayApplicationUpstreams>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | User-settable Application resource ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.securityGatewayId">securityGatewayId</a></code> | <code>java.lang.String</code> | ID of the Security Gateway resource this belongs to. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.endpointMatchers">endpointMatchers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>></code> | endpoint_matchers block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#id GoogleBeyondcorpSecurityGatewayApplication#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#project GoogleBeyondcorpSecurityGatewayApplication#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | Type of the external application. Possible values: ["PROXY_GATEWAY", "API_GATEWAY"]. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.upstreams">upstreams</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>></code> | upstreams block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

User-settable Application resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#application_id GoogleBeyondcorpSecurityGatewayApplication#application_id}

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.securityGatewayId"></a>

- *Type:* java.lang.String

ID of the Security Gateway resource this belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#security_gateway_id GoogleBeyondcorpSecurityGatewayApplication#security_gateway_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#deletion_policy GoogleBeyondcorpSecurityGatewayApplication#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#display_name GoogleBeyondcorpSecurityGatewayApplication#display_name}

---

##### `endpointMatchers`<sup>Optional</sup> <a name="endpointMatchers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.endpointMatchers"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>>

endpoint_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#endpoint_matchers GoogleBeyondcorpSecurityGatewayApplication#endpoint_matchers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#id GoogleBeyondcorpSecurityGatewayApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#project GoogleBeyondcorpSecurityGatewayApplication#project}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

Type of the external application. Possible values: ["PROXY_GATEWAY", "API_GATEWAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#schema GoogleBeyondcorpSecurityGatewayApplication#schema}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#timeouts GoogleBeyondcorpSecurityGatewayApplication#timeouts}

---

##### `upstreams`<sup>Optional</sup> <a name="upstreams" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.Initializer.parameter.upstreams"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>>

upstreams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#upstreams GoogleBeyondcorpSecurityGatewayApplication#upstreams}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putEndpointMatchers">putEndpointMatchers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putUpstreams">putUpstreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetEndpointMatchers">resetEndpointMatchers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetUpstreams">resetUpstreams</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpointMatchers` <a name="putEndpointMatchers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putEndpointMatchers"></a>

```java
public void putEndpointMatchers(IResolvable|java.util.List<GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putEndpointMatchers.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putTimeouts"></a>

```java
public void putTimeouts(GoogleBeyondcorpSecurityGatewayApplicationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a>

---

##### `putUpstreams` <a name="putUpstreams" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putUpstreams"></a>

```java
public void putUpstreams(IResolvable|java.util.List<GoogleBeyondcorpSecurityGatewayApplicationUpstreams> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.putUpstreams.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEndpointMatchers` <a name="resetEndpointMatchers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetEndpointMatchers"></a>

```java
public void resetEndpointMatchers()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetProject"></a>

```java
public void resetProject()
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetSchema"></a>

```java
public void resetSchema()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUpstreams` <a name="resetUpstreams" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.resetUpstreams"></a>

```java
public void resetUpstreams()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBeyondcorpSecurityGatewayApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplication;

GoogleBeyondcorpSecurityGatewayApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplication;

GoogleBeyondcorpSecurityGatewayApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplication;

GoogleBeyondcorpSecurityGatewayApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplication;

GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleBeyondcorpSecurityGatewayApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleBeyondcorpSecurityGatewayApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleBeyondcorpSecurityGatewayApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBeyondcorpSecurityGatewayApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.endpointMatchers">endpointMatchers</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference">GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.upstreams">upstreams</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.endpointMatchersInput">endpointMatchersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.securityGatewayIdInput">securityGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.upstreamsInput">upstreamsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.securityGatewayId">securityGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `endpointMatchers`<sup>Required</sup> <a name="endpointMatchers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.endpointMatchers"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList getEndpointMatchers();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.timeouts"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference">GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `upstreams`<sup>Required</sup> <a name="upstreams" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.upstreams"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList getUpstreams();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `endpointMatchersInput`<sup>Optional</sup> <a name="endpointMatchersInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.endpointMatchersInput"></a>

```java
public IResolvable|java.util.List<GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers> getEndpointMatchersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `securityGatewayIdInput`<sup>Optional</sup> <a name="securityGatewayIdInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.securityGatewayIdInput"></a>

```java
public java.lang.String getSecurityGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.timeoutsInput"></a>

```java
public IResolvable|GoogleBeyondcorpSecurityGatewayApplicationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a>

---

##### `upstreamsInput`<sup>Optional</sup> <a name="upstreamsInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.upstreamsInput"></a>

```java
public IResolvable|java.util.List<GoogleBeyondcorpSecurityGatewayApplicationUpstreams> getUpstreamsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.securityGatewayId"></a>

```java
public java.lang.String getSecurityGatewayId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBeyondcorpSecurityGatewayApplicationConfig <a name="GoogleBeyondcorpSecurityGatewayApplicationConfig" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationConfig;

GoogleBeyondcorpSecurityGatewayApplicationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .securityGatewayId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .endpointMatchers(IResolvable|java.util.List<GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .schema(java.lang.String)
//  .timeouts(GoogleBeyondcorpSecurityGatewayApplicationTimeouts)
//  .upstreams(IResolvable|java.util.List<GoogleBeyondcorpSecurityGatewayApplicationUpstreams>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | User-settable Application resource ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.securityGatewayId">securityGatewayId</a></code> | <code>java.lang.String</code> | ID of the Security Gateway resource this belongs to. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.endpointMatchers">endpointMatchers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>></code> | endpoint_matchers block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#id GoogleBeyondcorpSecurityGatewayApplication#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#project GoogleBeyondcorpSecurityGatewayApplication#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | Type of the external application. Possible values: ["PROXY_GATEWAY", "API_GATEWAY"]. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.upstreams">upstreams</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>></code> | upstreams block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

User-settable Application resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#application_id GoogleBeyondcorpSecurityGatewayApplication#application_id}

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.securityGatewayId"></a>

```java
public java.lang.String getSecurityGatewayId();
```

- *Type:* java.lang.String

ID of the Security Gateway resource this belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#security_gateway_id GoogleBeyondcorpSecurityGatewayApplication#security_gateway_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#deletion_policy GoogleBeyondcorpSecurityGatewayApplication#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#display_name GoogleBeyondcorpSecurityGatewayApplication#display_name}

---

##### `endpointMatchers`<sup>Optional</sup> <a name="endpointMatchers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.endpointMatchers"></a>

```java
public IResolvable|java.util.List<GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers> getEndpointMatchers();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>>

endpoint_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#endpoint_matchers GoogleBeyondcorpSecurityGatewayApplication#endpoint_matchers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#id GoogleBeyondcorpSecurityGatewayApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#project GoogleBeyondcorpSecurityGatewayApplication#project}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Type of the external application. Possible values: ["PROXY_GATEWAY", "API_GATEWAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#schema GoogleBeyondcorpSecurityGatewayApplication#schema}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.timeouts"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#timeouts GoogleBeyondcorpSecurityGatewayApplication#timeouts}

---

##### `upstreams`<sup>Optional</sup> <a name="upstreams" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationConfig.property.upstreams"></a>

```java
public IResolvable|java.util.List<GoogleBeyondcorpSecurityGatewayApplicationUpstreams> getUpstreams();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>>

upstreams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#upstreams GoogleBeyondcorpSecurityGatewayApplication#upstreams}

---

### GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers <a name="GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers;

GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers.builder()
    .hostname(java.lang.String)
    .ports(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Required. Hostname of the application. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | Optional. Ports of the application. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Required. Hostname of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#hostname GoogleBeyondcorpSecurityGatewayApplication#hostname}

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

Optional. Ports of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#ports GoogleBeyondcorpSecurityGatewayApplication#ports}

---

### GoogleBeyondcorpSecurityGatewayApplicationTimeouts <a name="GoogleBeyondcorpSecurityGatewayApplicationTimeouts" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationTimeouts;

GoogleBeyondcorpSecurityGatewayApplicationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#create GoogleBeyondcorpSecurityGatewayApplication#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#delete GoogleBeyondcorpSecurityGatewayApplication#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#update GoogleBeyondcorpSecurityGatewayApplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#create GoogleBeyondcorpSecurityGatewayApplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#delete GoogleBeyondcorpSecurityGatewayApplication#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#update GoogleBeyondcorpSecurityGatewayApplication#update}.

---

### GoogleBeyondcorpSecurityGatewayApplicationUpstreams <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreams" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreams;

GoogleBeyondcorpSecurityGatewayApplicationUpstreams.builder()
//  .egressPolicy(GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy)
//  .external(GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal)
//  .network(GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork)
//  .proxyProtocol(GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.property.egressPolicy">egressPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a></code> | egress_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.property.external">external</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal</a></code> | external block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.property.network">network</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a></code> | network block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.property.proxyProtocol">proxyProtocol</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol</a></code> | proxy_protocol block. |

---

##### `egressPolicy`<sup>Optional</sup> <a name="egressPolicy" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.property.egressPolicy"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy getEgressPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

egress_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#egress_policy GoogleBeyondcorpSecurityGatewayApplication#egress_policy}

---

##### `external`<sup>Optional</sup> <a name="external" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.property.external"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal getExternal();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal</a>

external block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#external GoogleBeyondcorpSecurityGatewayApplication#external}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.property.network"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork getNetwork();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#network GoogleBeyondcorpSecurityGatewayApplication#network}

---

##### `proxyProtocol`<sup>Optional</sup> <a name="proxyProtocol" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams.property.proxyProtocol"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol getProxyProtocol();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol</a>

proxy_protocol block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#proxy_protocol GoogleBeyondcorpSecurityGatewayApplication#proxy_protocol}

---

### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy;

GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy.builder()
    .regions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | Required. List of regions where the application sends traffic to. |

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

Required. List of regions where the application sends traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#regions GoogleBeyondcorpSecurityGatewayApplication#regions}

---

### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal;

GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal.builder()
    .endpoints(IResolvable|java.util.List<GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal.property.endpoints">endpoints</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a>></code> | endpoints block. |

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal.property.endpoints"></a>

```java
public IResolvable|java.util.List<GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints> getEndpoints();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a>>

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#endpoints GoogleBeyondcorpSecurityGatewayApplication#endpoints}

---

### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints;

GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints.builder()
    .hostname(java.lang.String)
    .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Hostname of the endpoint. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints.property.port">port</a></code> | <code>java.lang.Number</code> | Port of the endpoint. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Hostname of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#hostname GoogleBeyondcorpSecurityGatewayApplication#hostname}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#port GoogleBeyondcorpSecurityGatewayApplication#port}

---

### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork;

GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork.property.name">name</a></code> | <code>java.lang.String</code> | Required. Network name is of the format: 'projects/{project}/global/networks/{network}'. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Required. Network name is of the format: 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#name GoogleBeyondcorpSecurityGatewayApplication#name}

---

### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol;

GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.builder()
//  .allowedClientHeaders(java.util.List<java.lang.String>)
//  .clientIp(java.lang.Boolean|IResolvable)
//  .contextualHeaders(GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders)
//  .gatewayIdentity(java.lang.String)
//  .metadataHeaders(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.allowedClientHeaders">allowedClientHeaders</a></code> | <code>java.util.List<java.lang.String></code> | The configuration for the proxy. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.clientIp">clientIp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Client IP configuration. The client IP address is included if true. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.contextualHeaders">contextualHeaders</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders</a></code> | contextual_headers block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.gatewayIdentity">gatewayIdentity</a></code> | <code>java.lang.String</code> | Gateway identity configuration. Possible values: ["RESOURCE_NAME"]. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.metadataHeaders">metadataHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Custom resource specific headers along with the values. |

---

##### `allowedClientHeaders`<sup>Optional</sup> <a name="allowedClientHeaders" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.allowedClientHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedClientHeaders();
```

- *Type:* java.util.List<java.lang.String>

The configuration for the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#allowed_client_headers GoogleBeyondcorpSecurityGatewayApplication#allowed_client_headers}

---

##### `clientIp`<sup>Optional</sup> <a name="clientIp" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.clientIp"></a>

```java
public java.lang.Boolean|IResolvable getClientIp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Client IP configuration. The client IP address is included if true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#client_ip GoogleBeyondcorpSecurityGatewayApplication#client_ip}

---

##### `contextualHeaders`<sup>Optional</sup> <a name="contextualHeaders" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.contextualHeaders"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders getContextualHeaders();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders</a>

contextual_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#contextual_headers GoogleBeyondcorpSecurityGatewayApplication#contextual_headers}

---

##### `gatewayIdentity`<sup>Optional</sup> <a name="gatewayIdentity" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.gatewayIdentity"></a>

```java
public java.lang.String getGatewayIdentity();
```

- *Type:* java.lang.String

Gateway identity configuration. Possible values: ["RESOURCE_NAME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#gateway_identity GoogleBeyondcorpSecurityGatewayApplication#gateway_identity}

---

##### `metadataHeaders`<sup>Optional</sup> <a name="metadataHeaders" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.metadataHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Custom resource specific headers along with the values.

The names should conform to RFC 9110:

> Field names SHOULD constrain themselves to alphanumeric characters, "-",
> and ".", and SHOULD begin with a letter.
> Field values SHOULD contain only ASCII printable characters and tab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#metadata_headers GoogleBeyondcorpSecurityGatewayApplication#metadata_headers}

---

### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders;

GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.builder()
//  .deviceInfo(GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo)
//  .groupInfo(GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo)
//  .outputType(java.lang.String)
//  .userInfo(GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.property.deviceInfo">deviceInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo</a></code> | device_info block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.property.groupInfo">groupInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo</a></code> | group_info block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.property.outputType">outputType</a></code> | <code>java.lang.String</code> | Default output type for all enabled headers. Possible values: ["PROTOBUF", "JSON", "NONE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.property.userInfo">userInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo</a></code> | user_info block. |

---

##### `deviceInfo`<sup>Optional</sup> <a name="deviceInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.property.deviceInfo"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo getDeviceInfo();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo</a>

device_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#device_info GoogleBeyondcorpSecurityGatewayApplication#device_info}

---

##### `groupInfo`<sup>Optional</sup> <a name="groupInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.property.groupInfo"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo getGroupInfo();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo</a>

group_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#group_info GoogleBeyondcorpSecurityGatewayApplication#group_info}

---

##### `outputType`<sup>Optional</sup> <a name="outputType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.property.outputType"></a>

```java
public java.lang.String getOutputType();
```

- *Type:* java.lang.String

Default output type for all enabled headers. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#output_type GoogleBeyondcorpSecurityGatewayApplication#output_type}

---

##### `userInfo`<sup>Optional</sup> <a name="userInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.property.userInfo"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo getUserInfo();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo</a>

user_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#user_info GoogleBeyondcorpSecurityGatewayApplication#user_info}

---

### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo;

GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo.builder()
//  .outputType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo.property.outputType">outputType</a></code> | <code>java.lang.String</code> | The output type of the delegated device info. Possible values: ["PROTOBUF", "JSON", "NONE"]. |

---

##### `outputType`<sup>Optional</sup> <a name="outputType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo.property.outputType"></a>

```java
public java.lang.String getOutputType();
```

- *Type:* java.lang.String

The output type of the delegated device info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#output_type GoogleBeyondcorpSecurityGatewayApplication#output_type}

---

### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo;

GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo.builder()
//  .outputType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo.property.outputType">outputType</a></code> | <code>java.lang.String</code> | The output type of the delegated group info. Possible values: ["PROTOBUF", "JSON", "NONE"]. |

---

##### `outputType`<sup>Optional</sup> <a name="outputType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo.property.outputType"></a>

```java
public java.lang.String getOutputType();
```

- *Type:* java.lang.String

The output type of the delegated group info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#output_type GoogleBeyondcorpSecurityGatewayApplication#output_type}

---

### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo;

GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo.builder()
//  .outputType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo.property.outputType">outputType</a></code> | <code>java.lang.String</code> | The output type of the delegated user info. Possible values: ["PROTOBUF", "JSON", "NONE"]. |

---

##### `outputType`<sup>Optional</sup> <a name="outputType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo.property.outputType"></a>

```java
public java.lang.String getOutputType();
```

- *Type:* java.lang.String

The output type of the delegated user info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_beyondcorp_security_gateway_application#output_type GoogleBeyondcorpSecurityGatewayApplication#output_type}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList <a name="GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList;

new GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.get"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>>

---


### GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference;

new GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.portsInput">portsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.portsInput"></a>

```java
public java.util.List<java.lang.Number> getPortsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers">GoogleBeyondcorpSecurityGatewayApplicationEndpointMatchers</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference;

new GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleBeyondcorpSecurityGatewayApplicationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationTimeouts">GoogleBeyondcorpSecurityGatewayApplicationTimeouts</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference;

new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regionsInput">regionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regionsInput"></a>

```java
public java.util.List<java.lang.String> getRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.internalValue"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList;

new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.get"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a>>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference;

new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference;

new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.putEndpoints">putEndpoints</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndpoints` <a name="putEndpoints" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.putEndpoints"></a>

```java
public void putEndpoints(IResolvable|java.util.List<GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.putEndpoints.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.endpointsInput">endpointsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.endpoints"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList getEndpoints();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList</a>

---

##### `endpointsInput`<sup>Optional</sup> <a name="endpointsInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.endpointsInput"></a>

```java
public IResolvable|java.util.List<GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints> getEndpointsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.internalValue"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList;

new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.get"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleBeyondcorpSecurityGatewayApplicationUpstreams> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference;

new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.internalValue"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference;

new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putEgressPolicy">putEgressPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putExternal">putExternal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putProxyProtocol">putProxyProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetEgressPolicy">resetEgressPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetExternal">resetExternal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetProxyProtocol">resetProxyProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEgressPolicy` <a name="putEgressPolicy" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putEgressPolicy"></a>

```java
public void putEgressPolicy(GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putEgressPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

---

##### `putExternal` <a name="putExternal" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putExternal"></a>

```java
public void putExternal(GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putExternal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal</a>

---

##### `putNetwork` <a name="putNetwork" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putNetwork"></a>

```java
public void putNetwork(GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

---

##### `putProxyProtocol` <a name="putProxyProtocol" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putProxyProtocol"></a>

```java
public void putProxyProtocol(GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putProxyProtocol.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol</a>

---

##### `resetEgressPolicy` <a name="resetEgressPolicy" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetEgressPolicy"></a>

```java
public void resetEgressPolicy()
```

##### `resetExternal` <a name="resetExternal" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetExternal"></a>

```java
public void resetExternal()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetProxyProtocol` <a name="resetProxyProtocol" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetProxyProtocol"></a>

```java
public void resetProxyProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicy">egressPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.external">external</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.network">network</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.proxyProtocol">proxyProtocol</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicyInput">egressPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.externalInput">externalInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.networkInput">networkInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.proxyProtocolInput">proxyProtocolInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `egressPolicy`<sup>Required</sup> <a name="egressPolicy" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicy"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference getEgressPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference</a>

---

##### `external`<sup>Required</sup> <a name="external" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.external"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference getExternal();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.network"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference getNetwork();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference</a>

---

##### `proxyProtocol`<sup>Required</sup> <a name="proxyProtocol" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.proxyProtocol"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference getProxyProtocol();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference</a>

---

##### `egressPolicyInput`<sup>Optional</sup> <a name="egressPolicyInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicyInput"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy getEgressPolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

---

##### `externalInput`<sup>Optional</sup> <a name="externalInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.externalInput"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal getExternalInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsExternal</a>

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.networkInput"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork getNetworkInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

---

##### `proxyProtocolInput`<sup>Optional</sup> <a name="proxyProtocolInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.proxyProtocolInput"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol getProxyProtocolInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleBeyondcorpSecurityGatewayApplicationUpstreams getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreams">GoogleBeyondcorpSecurityGatewayApplicationUpstreams</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference;

new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.resetOutputType">resetOutputType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOutputType` <a name="resetOutputType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.resetOutputType"></a>

```java
public void resetOutputType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.outputTypeInput">outputTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.outputType">outputType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outputTypeInput`<sup>Optional</sup> <a name="outputTypeInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.outputTypeInput"></a>

```java
public java.lang.String getOutputTypeInput();
```

- *Type:* java.lang.String

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.outputType"></a>

```java
public java.lang.String getOutputType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.internalValue"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference;

new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.resetOutputType">resetOutputType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOutputType` <a name="resetOutputType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.resetOutputType"></a>

```java
public void resetOutputType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.outputTypeInput">outputTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.outputType">outputType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outputTypeInput`<sup>Optional</sup> <a name="outputTypeInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.outputTypeInput"></a>

```java
public java.lang.String getOutputTypeInput();
```

- *Type:* java.lang.String

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.outputType"></a>

```java
public java.lang.String getOutputType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.internalValue"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference;

new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putDeviceInfo">putDeviceInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putGroupInfo">putGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putUserInfo">putUserInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resetDeviceInfo">resetDeviceInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resetGroupInfo">resetGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resetOutputType">resetOutputType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resetUserInfo">resetUserInfo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeviceInfo` <a name="putDeviceInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putDeviceInfo"></a>

```java
public void putDeviceInfo(GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putDeviceInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo</a>

---

##### `putGroupInfo` <a name="putGroupInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putGroupInfo"></a>

```java
public void putGroupInfo(GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putGroupInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo</a>

---

##### `putUserInfo` <a name="putUserInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putUserInfo"></a>

```java
public void putUserInfo(GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putUserInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo</a>

---

##### `resetDeviceInfo` <a name="resetDeviceInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resetDeviceInfo"></a>

```java
public void resetDeviceInfo()
```

##### `resetGroupInfo` <a name="resetGroupInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resetGroupInfo"></a>

```java
public void resetGroupInfo()
```

##### `resetOutputType` <a name="resetOutputType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resetOutputType"></a>

```java
public void resetOutputType()
```

##### `resetUserInfo` <a name="resetUserInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resetUserInfo"></a>

```java
public void resetUserInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.deviceInfo">deviceInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.groupInfo">groupInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.userInfo">userInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.deviceInfoInput">deviceInfoInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.groupInfoInput">groupInfoInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.outputTypeInput">outputTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.userInfoInput">userInfoInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.outputType">outputType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deviceInfo`<sup>Required</sup> <a name="deviceInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.deviceInfo"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference getDeviceInfo();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference</a>

---

##### `groupInfo`<sup>Required</sup> <a name="groupInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.groupInfo"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference getGroupInfo();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference</a>

---

##### `userInfo`<sup>Required</sup> <a name="userInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.userInfo"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference getUserInfo();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference</a>

---

##### `deviceInfoInput`<sup>Optional</sup> <a name="deviceInfoInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.deviceInfoInput"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo getDeviceInfoInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo</a>

---

##### `groupInfoInput`<sup>Optional</sup> <a name="groupInfoInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.groupInfoInput"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo getGroupInfoInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo</a>

---

##### `outputTypeInput`<sup>Optional</sup> <a name="outputTypeInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.outputTypeInput"></a>

```java
public java.lang.String getOutputTypeInput();
```

- *Type:* java.lang.String

---

##### `userInfoInput`<sup>Optional</sup> <a name="userInfoInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.userInfoInput"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo getUserInfoInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo</a>

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.outputType"></a>

```java
public java.lang.String getOutputType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.internalValue"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference;

new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.resetOutputType">resetOutputType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOutputType` <a name="resetOutputType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.resetOutputType"></a>

```java
public void resetOutputType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.outputTypeInput">outputTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.outputType">outputType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outputTypeInput`<sup>Optional</sup> <a name="outputTypeInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.outputTypeInput"></a>

```java
public java.lang.String getOutputTypeInput();
```

- *Type:* java.lang.String

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.outputType"></a>

```java
public java.lang.String getOutputType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.internalValue"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo</a>

---


### GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference <a name="GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_beyondcorp_security_gateway_application.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference;

new GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.putContextualHeaders">putContextualHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetAllowedClientHeaders">resetAllowedClientHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetClientIp">resetClientIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetContextualHeaders">resetContextualHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetGatewayIdentity">resetGatewayIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetMetadataHeaders">resetMetadataHeaders</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContextualHeaders` <a name="putContextualHeaders" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.putContextualHeaders"></a>

```java
public void putContextualHeaders(GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.putContextualHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders</a>

---

##### `resetAllowedClientHeaders` <a name="resetAllowedClientHeaders" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetAllowedClientHeaders"></a>

```java
public void resetAllowedClientHeaders()
```

##### `resetClientIp` <a name="resetClientIp" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetClientIp"></a>

```java
public void resetClientIp()
```

##### `resetContextualHeaders` <a name="resetContextualHeaders" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetContextualHeaders"></a>

```java
public void resetContextualHeaders()
```

##### `resetGatewayIdentity` <a name="resetGatewayIdentity" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetGatewayIdentity"></a>

```java
public void resetGatewayIdentity()
```

##### `resetMetadataHeaders` <a name="resetMetadataHeaders" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetMetadataHeaders"></a>

```java
public void resetMetadataHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.contextualHeaders">contextualHeaders</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.allowedClientHeadersInput">allowedClientHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.clientIpInput">clientIpInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.contextualHeadersInput">contextualHeadersInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.gatewayIdentityInput">gatewayIdentityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.metadataHeadersInput">metadataHeadersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.allowedClientHeaders">allowedClientHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.clientIp">clientIp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.gatewayIdentity">gatewayIdentity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.metadataHeaders">metadataHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contextualHeaders`<sup>Required</sup> <a name="contextualHeaders" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.contextualHeaders"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference getContextualHeaders();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference</a>

---

##### `allowedClientHeadersInput`<sup>Optional</sup> <a name="allowedClientHeadersInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.allowedClientHeadersInput"></a>

```java
public java.util.List<java.lang.String> getAllowedClientHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientIpInput`<sup>Optional</sup> <a name="clientIpInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.clientIpInput"></a>

```java
public java.lang.Boolean|IResolvable getClientIpInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `contextualHeadersInput`<sup>Optional</sup> <a name="contextualHeadersInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.contextualHeadersInput"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders getContextualHeadersInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders</a>

---

##### `gatewayIdentityInput`<sup>Optional</sup> <a name="gatewayIdentityInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.gatewayIdentityInput"></a>

```java
public java.lang.String getGatewayIdentityInput();
```

- *Type:* java.lang.String

---

##### `metadataHeadersInput`<sup>Optional</sup> <a name="metadataHeadersInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.metadataHeadersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `allowedClientHeaders`<sup>Required</sup> <a name="allowedClientHeaders" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.allowedClientHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedClientHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientIp`<sup>Required</sup> <a name="clientIp" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.clientIp"></a>

```java
public java.lang.Boolean|IResolvable getClientIp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `gatewayIdentity`<sup>Required</sup> <a name="gatewayIdentity" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.gatewayIdentity"></a>

```java
public java.lang.String getGatewayIdentity();
```

- *Type:* java.lang.String

---

##### `metadataHeaders`<sup>Required</sup> <a name="metadataHeaders" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.metadataHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.internalValue"></a>

```java
public GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGatewayApplication.GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol">GoogleBeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol</a>

---



