# `googleDeveloperConnectAccountConnector` Submodule <a name="`googleDeveloperConnectAccountConnector` Submodule" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDeveloperConnectAccountConnector <a name="GoogleDeveloperConnectAccountConnector" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector google_developer_connect_account_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_developer_connect_account_connector.GoogleDeveloperConnectAccountConnector;

GoogleDeveloperConnectAccountConnector.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountConnectorId(java.lang.String)
    .location(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .customOauthConfig(GoogleDeveloperConnectAccountConnectorCustomOauthConfig)
//  .deletionPolicy(java.lang.String)
//  .etag(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .providerOauthConfig(GoogleDeveloperConnectAccountConnectorProviderOauthConfig)
//  .proxyConfig(GoogleDeveloperConnectAccountConnectorProxyConfig)
//  .timeouts(GoogleDeveloperConnectAccountConnectorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.accountConnectorId">accountConnectorId</a></code> | <code>java.lang.String</code> | The ID to use for the AccountConnector, which will become the final component of the AccountConnector's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Allows users to store small amounts of arbitrary data. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.customOauthConfig">customOauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfig</a></code> | custom_oauth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.etag">etag</a></code> | <code>java.lang.String</code> | This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#id GoogleDeveloperConnectAccountConnector#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#project GoogleDeveloperConnectAccountConnector#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.providerOauthConfig">providerOauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig">GoogleDeveloperConnectAccountConnectorProviderOauthConfig</a></code> | provider_oauth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig">GoogleDeveloperConnectAccountConnectorProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts">GoogleDeveloperConnectAccountConnectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountConnectorId`<sup>Required</sup> <a name="accountConnectorId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.accountConnectorId"></a>

- *Type:* java.lang.String

The ID to use for the AccountConnector, which will become the final component of the AccountConnector's resource name.

Its format should adhere
to https://google.aip.dev/122#resource-id-segments Names must be unique
per-project per-location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#account_connector_id GoogleDeveloperConnectAccountConnector#account_connector_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#location GoogleDeveloperConnectAccountConnector#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Allows users to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#annotations GoogleDeveloperConnectAccountConnector#annotations}

---

##### `customOauthConfig`<sup>Optional</sup> <a name="customOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.customOauthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfig</a>

custom_oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#custom_oauth_config GoogleDeveloperConnectAccountConnector#custom_oauth_config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#deletion_policy GoogleDeveloperConnectAccountConnector#deletion_policy}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.etag"></a>

- *Type:* java.lang.String

This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#etag GoogleDeveloperConnectAccountConnector#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#id GoogleDeveloperConnectAccountConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#labels GoogleDeveloperConnectAccountConnector#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#project GoogleDeveloperConnectAccountConnector#project}.

---

##### `providerOauthConfig`<sup>Optional</sup> <a name="providerOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.providerOauthConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig">GoogleDeveloperConnectAccountConnectorProviderOauthConfig</a>

provider_oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#provider_oauth_config GoogleDeveloperConnectAccountConnector#provider_oauth_config}

---

##### `proxyConfig`<sup>Optional</sup> <a name="proxyConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.proxyConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig">GoogleDeveloperConnectAccountConnectorProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#proxy_config GoogleDeveloperConnectAccountConnector#proxy_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts">GoogleDeveloperConnectAccountConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#timeouts GoogleDeveloperConnectAccountConnector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putCustomOauthConfig">putCustomOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putProviderOauthConfig">putProviderOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putProxyConfig">putProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetCustomOauthConfig">resetCustomOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetProviderOauthConfig">resetProviderOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetProxyConfig">resetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomOauthConfig` <a name="putCustomOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putCustomOauthConfig"></a>

```java
public void putCustomOauthConfig(GoogleDeveloperConnectAccountConnectorCustomOauthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putCustomOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfig</a>

---

##### `putProviderOauthConfig` <a name="putProviderOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putProviderOauthConfig"></a>

```java
public void putProviderOauthConfig(GoogleDeveloperConnectAccountConnectorProviderOauthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putProviderOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig">GoogleDeveloperConnectAccountConnectorProviderOauthConfig</a>

---

##### `putProxyConfig` <a name="putProxyConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putProxyConfig"></a>

```java
public void putProxyConfig(GoogleDeveloperConnectAccountConnectorProxyConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig">GoogleDeveloperConnectAccountConnectorProxyConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putTimeouts"></a>

```java
public void putTimeouts(GoogleDeveloperConnectAccountConnectorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts">GoogleDeveloperConnectAccountConnectorTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetCustomOauthConfig` <a name="resetCustomOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetCustomOauthConfig"></a>

```java
public void resetCustomOauthConfig()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetEtag` <a name="resetEtag" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetEtag"></a>

```java
public void resetEtag()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetProject"></a>

```java
public void resetProject()
```

##### `resetProviderOauthConfig` <a name="resetProviderOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetProviderOauthConfig"></a>

```java
public void resetProviderOauthConfig()
```

##### `resetProxyConfig` <a name="resetProxyConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetProxyConfig"></a>

```java
public void resetProxyConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDeveloperConnectAccountConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_developer_connect_account_connector.GoogleDeveloperConnectAccountConnector;

GoogleDeveloperConnectAccountConnector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_developer_connect_account_connector.GoogleDeveloperConnectAccountConnector;

GoogleDeveloperConnectAccountConnector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_developer_connect_account_connector.GoogleDeveloperConnectAccountConnector;

GoogleDeveloperConnectAccountConnector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_developer_connect_account_connector.GoogleDeveloperConnectAccountConnector;

GoogleDeveloperConnectAccountConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDeveloperConnectAccountConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleDeveloperConnectAccountConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDeveloperConnectAccountConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDeveloperConnectAccountConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDeveloperConnectAccountConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.customOauthConfig">customOauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference">GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.oauthStartUri">oauthStartUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.providerOauthConfig">providerOauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference">GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference">GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference">GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.accountConnectorIdInput">accountConnectorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.customOauthConfigInput">customOauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.etagInput">etagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.providerOauthConfigInput">providerOauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig">GoogleDeveloperConnectAccountConnectorProviderOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.proxyConfigInput">proxyConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig">GoogleDeveloperConnectAccountConnectorProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts">GoogleDeveloperConnectAccountConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.accountConnectorId">accountConnectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `customOauthConfig`<sup>Required</sup> <a name="customOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.customOauthConfig"></a>

```java
public GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference getCustomOauthConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference">GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `oauthStartUri`<sup>Required</sup> <a name="oauthStartUri" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.oauthStartUri"></a>

```java
public java.lang.String getOauthStartUri();
```

- *Type:* java.lang.String

---

##### `providerOauthConfig`<sup>Required</sup> <a name="providerOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.providerOauthConfig"></a>

```java
public GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference getProviderOauthConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference">GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference</a>

---

##### `proxyConfig`<sup>Required</sup> <a name="proxyConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.proxyConfig"></a>

```java
public GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference getProxyConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference">GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.timeouts"></a>

```java
public GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference">GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `accountConnectorIdInput`<sup>Optional</sup> <a name="accountConnectorIdInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.accountConnectorIdInput"></a>

```java
public java.lang.String getAccountConnectorIdInput();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `customOauthConfigInput`<sup>Optional</sup> <a name="customOauthConfigInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.customOauthConfigInput"></a>

```java
public GoogleDeveloperConnectAccountConnectorCustomOauthConfig getCustomOauthConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfig</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.etagInput"></a>

```java
public java.lang.String getEtagInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `providerOauthConfigInput`<sup>Optional</sup> <a name="providerOauthConfigInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.providerOauthConfigInput"></a>

```java
public GoogleDeveloperConnectAccountConnectorProviderOauthConfig getProviderOauthConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig">GoogleDeveloperConnectAccountConnectorProviderOauthConfig</a>

---

##### `proxyConfigInput`<sup>Optional</sup> <a name="proxyConfigInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.proxyConfigInput"></a>

```java
public GoogleDeveloperConnectAccountConnectorProxyConfig getProxyConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig">GoogleDeveloperConnectAccountConnectorProxyConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.timeoutsInput"></a>

```java
public IResolvable|GoogleDeveloperConnectAccountConnectorTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts">GoogleDeveloperConnectAccountConnectorTimeouts</a>

---

##### `accountConnectorId`<sup>Required</sup> <a name="accountConnectorId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.accountConnectorId"></a>

```java
public java.lang.String getAccountConnectorId();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDeveloperConnectAccountConnectorConfig <a name="GoogleDeveloperConnectAccountConnectorConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_developer_connect_account_connector.GoogleDeveloperConnectAccountConnectorConfig;

GoogleDeveloperConnectAccountConnectorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountConnectorId(java.lang.String)
    .location(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .customOauthConfig(GoogleDeveloperConnectAccountConnectorCustomOauthConfig)
//  .deletionPolicy(java.lang.String)
//  .etag(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .providerOauthConfig(GoogleDeveloperConnectAccountConnectorProviderOauthConfig)
//  .proxyConfig(GoogleDeveloperConnectAccountConnectorProxyConfig)
//  .timeouts(GoogleDeveloperConnectAccountConnectorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.accountConnectorId">accountConnectorId</a></code> | <code>java.lang.String</code> | The ID to use for the AccountConnector, which will become the final component of the AccountConnector's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Allows users to store small amounts of arbitrary data. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.customOauthConfig">customOauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfig</a></code> | custom_oauth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.etag">etag</a></code> | <code>java.lang.String</code> | This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#id GoogleDeveloperConnectAccountConnector#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#project GoogleDeveloperConnectAccountConnector#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.providerOauthConfig">providerOauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig">GoogleDeveloperConnectAccountConnectorProviderOauthConfig</a></code> | provider_oauth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig">GoogleDeveloperConnectAccountConnectorProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts">GoogleDeveloperConnectAccountConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountConnectorId`<sup>Required</sup> <a name="accountConnectorId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.accountConnectorId"></a>

```java
public java.lang.String getAccountConnectorId();
```

- *Type:* java.lang.String

The ID to use for the AccountConnector, which will become the final component of the AccountConnector's resource name.

Its format should adhere
to https://google.aip.dev/122#resource-id-segments Names must be unique
per-project per-location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#account_connector_id GoogleDeveloperConnectAccountConnector#account_connector_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#location GoogleDeveloperConnectAccountConnector#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Allows users to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#annotations GoogleDeveloperConnectAccountConnector#annotations}

---

##### `customOauthConfig`<sup>Optional</sup> <a name="customOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.customOauthConfig"></a>

```java
public GoogleDeveloperConnectAccountConnectorCustomOauthConfig getCustomOauthConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfig</a>

custom_oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#custom_oauth_config GoogleDeveloperConnectAccountConnector#custom_oauth_config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#deletion_policy GoogleDeveloperConnectAccountConnector#deletion_policy}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#etag GoogleDeveloperConnectAccountConnector#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#id GoogleDeveloperConnectAccountConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#labels GoogleDeveloperConnectAccountConnector#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#project GoogleDeveloperConnectAccountConnector#project}.

---

##### `providerOauthConfig`<sup>Optional</sup> <a name="providerOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.providerOauthConfig"></a>

```java
public GoogleDeveloperConnectAccountConnectorProviderOauthConfig getProviderOauthConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig">GoogleDeveloperConnectAccountConnectorProviderOauthConfig</a>

provider_oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#provider_oauth_config GoogleDeveloperConnectAccountConnector#provider_oauth_config}

---

##### `proxyConfig`<sup>Optional</sup> <a name="proxyConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.proxyConfig"></a>

```java
public GoogleDeveloperConnectAccountConnectorProxyConfig getProxyConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig">GoogleDeveloperConnectAccountConnectorProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#proxy_config GoogleDeveloperConnectAccountConnector#proxy_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorConfig.property.timeouts"></a>

```java
public GoogleDeveloperConnectAccountConnectorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts">GoogleDeveloperConnectAccountConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#timeouts GoogleDeveloperConnectAccountConnector#timeouts}

---

### GoogleDeveloperConnectAccountConnectorCustomOauthConfig <a name="GoogleDeveloperConnectAccountConnectorCustomOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_developer_connect_account_connector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig;

GoogleDeveloperConnectAccountConnectorCustomOauthConfig.builder()
    .authUri(java.lang.String)
    .clientId(java.lang.String)
    .clientSecret(java.lang.String)
    .hostUri(java.lang.String)
    .scmProvider(java.lang.String)
    .scopes(java.util.List<java.lang.String>)
    .tokenUri(java.lang.String)
//  .pkceDisabled(java.lang.Boolean|IResolvable)
//  .serviceDirectoryConfig(GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig)
//  .sslCaCertificate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.authUri">authUri</a></code> | <code>java.lang.String</code> | The OAuth2 authrization server URL. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client ID of the OAuth application. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Input only. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.hostUri">hostUri</a></code> | <code>java.lang.String</code> | The host URI of the OAuth application. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.scmProvider">scmProvider</a></code> | <code>java.lang.String</code> | The type of the SCM provider. Possible values: SCM_PROVIDER_UNKNOWN GITHUB_ENTERPRISE GITLAB_ENTERPRISE BITBUCKET_DATA_CENTER. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | The scopes to be requested during OAuth. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.tokenUri">tokenUri</a></code> | <code>java.lang.String</code> | The OAuth2 token request URL. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.pkceDisabled">pkceDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disable PKCE for this OAuth config. PKCE is enabled by default. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.sslCaCertificate">sslCaCertificate</a></code> | <code>java.lang.String</code> | SSL certificate to use for requests to a private service. |

---

##### `authUri`<sup>Required</sup> <a name="authUri" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.authUri"></a>

```java
public java.lang.String getAuthUri();
```

- *Type:* java.lang.String

The OAuth2 authrization server URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#auth_uri GoogleDeveloperConnectAccountConnector#auth_uri}

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client ID of the OAuth application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#client_id GoogleDeveloperConnectAccountConnector#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Input only.

The client secret of the OAuth application.
It will be provided as plain text, but encrypted and stored in developer
connect. As INPUT_ONLY field, it will not be included in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#client_secret GoogleDeveloperConnectAccountConnector#client_secret}

---

##### `hostUri`<sup>Required</sup> <a name="hostUri" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.hostUri"></a>

```java
public java.lang.String getHostUri();
```

- *Type:* java.lang.String

The host URI of the OAuth application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#host_uri GoogleDeveloperConnectAccountConnector#host_uri}

---

##### `scmProvider`<sup>Required</sup> <a name="scmProvider" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.scmProvider"></a>

```java
public java.lang.String getScmProvider();
```

- *Type:* java.lang.String

The type of the SCM provider. Possible values: SCM_PROVIDER_UNKNOWN GITHUB_ENTERPRISE GITLAB_ENTERPRISE BITBUCKET_DATA_CENTER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#scm_provider GoogleDeveloperConnectAccountConnector#scm_provider}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

The scopes to be requested during OAuth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#scopes GoogleDeveloperConnectAccountConnector#scopes}

---

##### `tokenUri`<sup>Required</sup> <a name="tokenUri" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.tokenUri"></a>

```java
public java.lang.String getTokenUri();
```

- *Type:* java.lang.String

The OAuth2 token request URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#token_uri GoogleDeveloperConnectAccountConnector#token_uri}

---

##### `pkceDisabled`<sup>Optional</sup> <a name="pkceDisabled" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.pkceDisabled"></a>

```java
public java.lang.Boolean|IResolvable getPkceDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disable PKCE for this OAuth config. PKCE is enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#pkce_disabled GoogleDeveloperConnectAccountConnector#pkce_disabled}

---

##### `serviceDirectoryConfig`<sup>Optional</sup> <a name="serviceDirectoryConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.serviceDirectoryConfig"></a>

```java
public GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig getServiceDirectoryConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#service_directory_config GoogleDeveloperConnectAccountConnector#service_directory_config}

---

##### `sslCaCertificate`<sup>Optional</sup> <a name="sslCaCertificate" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig.property.sslCaCertificate"></a>

```java
public java.lang.String getSslCaCertificate();
```

- *Type:* java.lang.String

SSL certificate to use for requests to a private service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#ssl_ca_certificate GoogleDeveloperConnectAccountConnector#ssl_ca_certificate}

---

### GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig <a name="GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_developer_connect_account_connector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig;

GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig.builder()
    .service(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig.property.service">service</a></code> | <code>java.lang.String</code> | The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#service GoogleDeveloperConnectAccountConnector#service}

---

### GoogleDeveloperConnectAccountConnectorProviderOauthConfig <a name="GoogleDeveloperConnectAccountConnectorProviderOauthConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_developer_connect_account_connector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig;

GoogleDeveloperConnectAccountConnectorProviderOauthConfig.builder()
    .scopes(java.util.List<java.lang.String>)
//  .systemProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | User selected scopes to apply to the Oauth config In the event of changing scopes, user records under AccountConnector will be deleted and users will re-auth again. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig.property.systemProviderId">systemProviderId</a></code> | <code>java.lang.String</code> | Possible values: GITHUB GITLAB GOOGLE SENTRY ROVO NEW_RELIC DATASTAX DYNATRACE. |

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

User selected scopes to apply to the Oauth config In the event of changing scopes, user records under AccountConnector will be deleted and users will re-auth again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#scopes GoogleDeveloperConnectAccountConnector#scopes}

---

##### `systemProviderId`<sup>Optional</sup> <a name="systemProviderId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig.property.systemProviderId"></a>

```java
public java.lang.String getSystemProviderId();
```

- *Type:* java.lang.String

Possible values: GITHUB GITLAB GOOGLE SENTRY ROVO NEW_RELIC DATASTAX DYNATRACE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#system_provider_id GoogleDeveloperConnectAccountConnector#system_provider_id}

---

### GoogleDeveloperConnectAccountConnectorProxyConfig <a name="GoogleDeveloperConnectAccountConnectorProxyConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_developer_connect_account_connector.GoogleDeveloperConnectAccountConnectorProxyConfig;

GoogleDeveloperConnectAccountConnectorProxyConfig.builder()
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Setting this to true allows the git and http proxies to perform actions on behalf of the user configured under the account connector. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Setting this to true allows the git and http proxies to perform actions on behalf of the user configured under the account connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#enabled GoogleDeveloperConnectAccountConnector#enabled}

---

### GoogleDeveloperConnectAccountConnectorTimeouts <a name="GoogleDeveloperConnectAccountConnectorTimeouts" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_developer_connect_account_connector.GoogleDeveloperConnectAccountConnectorTimeouts;

GoogleDeveloperConnectAccountConnectorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#create GoogleDeveloperConnectAccountConnector#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#delete GoogleDeveloperConnectAccountConnector#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#update GoogleDeveloperConnectAccountConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#create GoogleDeveloperConnectAccountConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#delete GoogleDeveloperConnectAccountConnector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_developer_connect_account_connector#update GoogleDeveloperConnectAccountConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference <a name="GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_developer_connect_account_connector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference;

new GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.putServiceDirectoryConfig">putServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resetPkceDisabled">resetPkceDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resetServiceDirectoryConfig">resetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resetSslCaCertificate">resetSslCaCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServiceDirectoryConfig` <a name="putServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.putServiceDirectoryConfig"></a>

```java
public void putServiceDirectoryConfig(GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a>

---

##### `resetPkceDisabled` <a name="resetPkceDisabled" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resetPkceDisabled"></a>

```java
public void resetPkceDisabled()
```

##### `resetServiceDirectoryConfig` <a name="resetServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resetServiceDirectoryConfig"></a>

```java
public void resetServiceDirectoryConfig()
```

##### `resetSslCaCertificate` <a name="resetSslCaCertificate" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.resetSslCaCertificate"></a>

```java
public void resetSslCaCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.serverVersion">serverVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.authUriInput">authUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.hostUriInput">hostUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.pkceDisabledInput">pkceDisabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scmProviderInput">scmProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.serviceDirectoryConfigInput">serviceDirectoryConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.sslCaCertificateInput">sslCaCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.tokenUriInput">tokenUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.authUri">authUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.hostUri">hostUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.pkceDisabled">pkceDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scmProvider">scmProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.sslCaCertificate">sslCaCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.tokenUri">tokenUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serverVersion`<sup>Required</sup> <a name="serverVersion" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.serverVersion"></a>

```java
public java.lang.String getServerVersion();
```

- *Type:* java.lang.String

---

##### `serviceDirectoryConfig`<sup>Required</sup> <a name="serviceDirectoryConfig" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.serviceDirectoryConfig"></a>

```java
public GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference getServiceDirectoryConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference</a>

---

##### `authUriInput`<sup>Optional</sup> <a name="authUriInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.authUriInput"></a>

```java
public java.lang.String getAuthUriInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `hostUriInput`<sup>Optional</sup> <a name="hostUriInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.hostUriInput"></a>

```java
public java.lang.String getHostUriInput();
```

- *Type:* java.lang.String

---

##### `pkceDisabledInput`<sup>Optional</sup> <a name="pkceDisabledInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.pkceDisabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPkceDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `scmProviderInput`<sup>Optional</sup> <a name="scmProviderInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scmProviderInput"></a>

```java
public java.lang.String getScmProviderInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceDirectoryConfigInput`<sup>Optional</sup> <a name="serviceDirectoryConfigInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```java
public GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig getServiceDirectoryConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a>

---

##### `sslCaCertificateInput`<sup>Optional</sup> <a name="sslCaCertificateInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.sslCaCertificateInput"></a>

```java
public java.lang.String getSslCaCertificateInput();
```

- *Type:* java.lang.String

---

##### `tokenUriInput`<sup>Optional</sup> <a name="tokenUriInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.tokenUriInput"></a>

```java
public java.lang.String getTokenUriInput();
```

- *Type:* java.lang.String

---

##### `authUri`<sup>Required</sup> <a name="authUri" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.authUri"></a>

```java
public java.lang.String getAuthUri();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `hostUri`<sup>Required</sup> <a name="hostUri" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.hostUri"></a>

```java
public java.lang.String getHostUri();
```

- *Type:* java.lang.String

---

##### `pkceDisabled`<sup>Required</sup> <a name="pkceDisabled" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.pkceDisabled"></a>

```java
public java.lang.Boolean|IResolvable getPkceDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `scmProvider`<sup>Required</sup> <a name="scmProvider" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scmProvider"></a>

```java
public java.lang.String getScmProvider();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sslCaCertificate`<sup>Required</sup> <a name="sslCaCertificate" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.sslCaCertificate"></a>

```java
public java.lang.String getSslCaCertificate();
```

- *Type:* java.lang.String

---

##### `tokenUri`<sup>Required</sup> <a name="tokenUri" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.tokenUri"></a>

```java
public java.lang.String getTokenUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigOutputReference.property.internalValue"></a>

```java
public GoogleDeveloperConnectAccountConnectorCustomOauthConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfig</a>

---


### GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference <a name="GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_developer_connect_account_connector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference;

new GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```java
public GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig">GoogleDeveloperConnectAccountConnectorCustomOauthConfigServiceDirectoryConfig</a>

---


### GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference <a name="GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_developer_connect_account_connector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference;

new GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resetSystemProviderId">resetSystemProviderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSystemProviderId` <a name="resetSystemProviderId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resetSystemProviderId"></a>

```java
public void resetSystemProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderIdInput">systemProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderId">systemProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig">GoogleDeveloperConnectAccountConnectorProviderOauthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `systemProviderIdInput`<sup>Optional</sup> <a name="systemProviderIdInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderIdInput"></a>

```java
public java.lang.String getSystemProviderIdInput();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `systemProviderId`<sup>Required</sup> <a name="systemProviderId" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderId"></a>

```java
public java.lang.String getSystemProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.internalValue"></a>

```java
public GoogleDeveloperConnectAccountConnectorProviderOauthConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProviderOauthConfig">GoogleDeveloperConnectAccountConnectorProviderOauthConfig</a>

---


### GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference <a name="GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_developer_connect_account_connector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference;

new GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig">GoogleDeveloperConnectAccountConnectorProxyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfigOutputReference.property.internalValue"></a>

```java
public GoogleDeveloperConnectAccountConnectorProxyConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorProxyConfig">GoogleDeveloperConnectAccountConnectorProxyConfig</a>

---


### GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference <a name="GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_developer_connect_account_connector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference;

new GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts">GoogleDeveloperConnectAccountConnectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDeveloperConnectAccountConnectorTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDeveloperConnectAccountConnector.GoogleDeveloperConnectAccountConnectorTimeouts">GoogleDeveloperConnectAccountConnectorTimeouts</a>

---



