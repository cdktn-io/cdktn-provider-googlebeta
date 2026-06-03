# `googleNetworkSecurityGatewaySecurityPolicyRule` Submodule <a name="`googleNetworkSecurityGatewaySecurityPolicyRule` Submodule" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityGatewaySecurityPolicyRule <a name="GoogleNetworkSecurityGatewaySecurityPolicyRule" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule google_network_security_gateway_security_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_gateway_security_policy_rule.GoogleNetworkSecurityGatewaySecurityPolicyRule;

GoogleNetworkSecurityGatewaySecurityPolicyRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .basicProfile(java.lang.String)
    .enabled(java.lang.Boolean|IResolvable)
    .gatewaySecurityPolicy(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .priority(java.lang.Number)
    .sessionMatcher(java.lang.String)
//  .applicationMatcher(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts)
//  .tlsInspectionEnabled(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.basicProfile">basicProfile</a></code> | <code>java.lang.String</code> | Profile which tells what the primitive action should be. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the rule is enforced. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.gatewaySecurityPolicy">gatewaySecurityPolicy</a></code> | <code>java.lang.String</code> | The name of the gatewat security policy this rule belongs to. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the gateway security policy. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^a-z?$). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Priority of the rule. Lower number corresponds to higher precedence. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.sessionMatcher">sessionMatcher</a></code> | <code>java.lang.String</code> | CEL expression for matching on session criteria. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.applicationMatcher">applicationMatcher</a></code> | <code>java.lang.String</code> | CEL expression for matching on L7/application level criteria. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Free-text description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#id GoogleNetworkSecurityGatewaySecurityPolicyRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#project GoogleNetworkSecurityGatewaySecurityPolicyRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.tlsInspectionEnabled">tlsInspectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Flag to enable TLS inspection of traffic matching on. Can only be true if the parent GatewaySecurityPolicy references a TLSInspectionConfig. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `basicProfile`<sup>Required</sup> <a name="basicProfile" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.basicProfile"></a>

- *Type:* java.lang.String

Profile which tells what the primitive action should be.

Possible values are: * ALLOW * DENY. Possible values: ["BASIC_PROFILE_UNSPECIFIED", "ALLOW", "DENY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#basic_profile GoogleNetworkSecurityGatewaySecurityPolicyRule#basic_profile}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the rule is enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#enabled GoogleNetworkSecurityGatewaySecurityPolicyRule#enabled}

---

##### `gatewaySecurityPolicy`<sup>Required</sup> <a name="gatewaySecurityPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.gatewaySecurityPolicy"></a>

- *Type:* java.lang.String

The name of the gatewat security policy this rule belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#gateway_security_policy GoogleNetworkSecurityGatewaySecurityPolicyRule#gateway_security_policy}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the gateway security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#location GoogleNetworkSecurityGatewaySecurityPolicyRule#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^a-z?$).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#name GoogleNetworkSecurityGatewaySecurityPolicyRule#name}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Priority of the rule. Lower number corresponds to higher precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#priority GoogleNetworkSecurityGatewaySecurityPolicyRule#priority}

---

##### `sessionMatcher`<sup>Required</sup> <a name="sessionMatcher" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.sessionMatcher"></a>

- *Type:* java.lang.String

CEL expression for matching on session criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#session_matcher GoogleNetworkSecurityGatewaySecurityPolicyRule#session_matcher}

---

##### `applicationMatcher`<sup>Optional</sup> <a name="applicationMatcher" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.applicationMatcher"></a>

- *Type:* java.lang.String

CEL expression for matching on L7/application level criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#application_matcher GoogleNetworkSecurityGatewaySecurityPolicyRule#application_matcher}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#deletion_policy GoogleNetworkSecurityGatewaySecurityPolicyRule#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#description GoogleNetworkSecurityGatewaySecurityPolicyRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#id GoogleNetworkSecurityGatewaySecurityPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#project GoogleNetworkSecurityGatewaySecurityPolicyRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#timeouts GoogleNetworkSecurityGatewaySecurityPolicyRule#timeouts}

---

##### `tlsInspectionEnabled`<sup>Optional</sup> <a name="tlsInspectionEnabled" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.Initializer.parameter.tlsInspectionEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Flag to enable TLS inspection of traffic matching on. Can only be true if the parent GatewaySecurityPolicy references a TLSInspectionConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#tls_inspection_enabled GoogleNetworkSecurityGatewaySecurityPolicyRule#tls_inspection_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetApplicationMatcher">resetApplicationMatcher</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetTlsInspectionEnabled">resetTlsInspectionEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts</a>

---

##### `resetApplicationMatcher` <a name="resetApplicationMatcher" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetApplicationMatcher"></a>

```java
public void resetApplicationMatcher()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTlsInspectionEnabled` <a name="resetTlsInspectionEnabled" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.resetTlsInspectionEnabled"></a>

```java
public void resetTlsInspectionEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkSecurityGatewaySecurityPolicyRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_gateway_security_policy_rule.GoogleNetworkSecurityGatewaySecurityPolicyRule;

GoogleNetworkSecurityGatewaySecurityPolicyRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_gateway_security_policy_rule.GoogleNetworkSecurityGatewaySecurityPolicyRule;

GoogleNetworkSecurityGatewaySecurityPolicyRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_gateway_security_policy_rule.GoogleNetworkSecurityGatewaySecurityPolicyRule;

GoogleNetworkSecurityGatewaySecurityPolicyRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_gateway_security_policy_rule.GoogleNetworkSecurityGatewaySecurityPolicyRule;

GoogleNetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleNetworkSecurityGatewaySecurityPolicyRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkSecurityGatewaySecurityPolicyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkSecurityGatewaySecurityPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityGatewaySecurityPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference">GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.applicationMatcherInput">applicationMatcherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.basicProfileInput">basicProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.gatewaySecurityPolicyInput">gatewaySecurityPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.sessionMatcherInput">sessionMatcherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.tlsInspectionEnabledInput">tlsInspectionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.applicationMatcher">applicationMatcher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.basicProfile">basicProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.gatewaySecurityPolicy">gatewaySecurityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.sessionMatcher">sessionMatcher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.tlsInspectionEnabled">tlsInspectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.timeouts"></a>

```java
public GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference">GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `applicationMatcherInput`<sup>Optional</sup> <a name="applicationMatcherInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.applicationMatcherInput"></a>

```java
public java.lang.String getApplicationMatcherInput();
```

- *Type:* java.lang.String

---

##### `basicProfileInput`<sup>Optional</sup> <a name="basicProfileInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.basicProfileInput"></a>

```java
public java.lang.String getBasicProfileInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `gatewaySecurityPolicyInput`<sup>Optional</sup> <a name="gatewaySecurityPolicyInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.gatewaySecurityPolicyInput"></a>

```java
public java.lang.String getGatewaySecurityPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `sessionMatcherInput`<sup>Optional</sup> <a name="sessionMatcherInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.sessionMatcherInput"></a>

```java
public java.lang.String getSessionMatcherInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.timeoutsInput"></a>

```java
public IResolvable|GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts</a>

---

##### `tlsInspectionEnabledInput`<sup>Optional</sup> <a name="tlsInspectionEnabledInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.tlsInspectionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getTlsInspectionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `applicationMatcher`<sup>Required</sup> <a name="applicationMatcher" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.applicationMatcher"></a>

```java
public java.lang.String getApplicationMatcher();
```

- *Type:* java.lang.String

---

##### `basicProfile`<sup>Required</sup> <a name="basicProfile" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.basicProfile"></a>

```java
public java.lang.String getBasicProfile();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `gatewaySecurityPolicy`<sup>Required</sup> <a name="gatewaySecurityPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.gatewaySecurityPolicy"></a>

```java
public java.lang.String getGatewaySecurityPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `sessionMatcher`<sup>Required</sup> <a name="sessionMatcher" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.sessionMatcher"></a>

```java
public java.lang.String getSessionMatcher();
```

- *Type:* java.lang.String

---

##### `tlsInspectionEnabled`<sup>Required</sup> <a name="tlsInspectionEnabled" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.tlsInspectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getTlsInspectionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig <a name="GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_gateway_security_policy_rule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig;

GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .basicProfile(java.lang.String)
    .enabled(java.lang.Boolean|IResolvable)
    .gatewaySecurityPolicy(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .priority(java.lang.Number)
    .sessionMatcher(java.lang.String)
//  .applicationMatcher(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts)
//  .tlsInspectionEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.basicProfile">basicProfile</a></code> | <code>java.lang.String</code> | Profile which tells what the primitive action should be. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the rule is enforced. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.gatewaySecurityPolicy">gatewaySecurityPolicy</a></code> | <code>java.lang.String</code> | The name of the gatewat security policy this rule belongs to. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the gateway security policy. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^a-z?$). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Priority of the rule. Lower number corresponds to higher precedence. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.sessionMatcher">sessionMatcher</a></code> | <code>java.lang.String</code> | CEL expression for matching on session criteria. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.applicationMatcher">applicationMatcher</a></code> | <code>java.lang.String</code> | CEL expression for matching on L7/application level criteria. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Free-text description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#id GoogleNetworkSecurityGatewaySecurityPolicyRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#project GoogleNetworkSecurityGatewaySecurityPolicyRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.tlsInspectionEnabled">tlsInspectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Flag to enable TLS inspection of traffic matching on. Can only be true if the parent GatewaySecurityPolicy references a TLSInspectionConfig. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `basicProfile`<sup>Required</sup> <a name="basicProfile" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.basicProfile"></a>

```java
public java.lang.String getBasicProfile();
```

- *Type:* java.lang.String

Profile which tells what the primitive action should be.

Possible values are: * ALLOW * DENY. Possible values: ["BASIC_PROFILE_UNSPECIFIED", "ALLOW", "DENY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#basic_profile GoogleNetworkSecurityGatewaySecurityPolicyRule#basic_profile}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the rule is enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#enabled GoogleNetworkSecurityGatewaySecurityPolicyRule#enabled}

---

##### `gatewaySecurityPolicy`<sup>Required</sup> <a name="gatewaySecurityPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.gatewaySecurityPolicy"></a>

```java
public java.lang.String getGatewaySecurityPolicy();
```

- *Type:* java.lang.String

The name of the gatewat security policy this rule belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#gateway_security_policy GoogleNetworkSecurityGatewaySecurityPolicyRule#gateway_security_policy}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the gateway security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#location GoogleNetworkSecurityGatewaySecurityPolicyRule#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^a-z?$).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#name GoogleNetworkSecurityGatewaySecurityPolicyRule#name}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Priority of the rule. Lower number corresponds to higher precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#priority GoogleNetworkSecurityGatewaySecurityPolicyRule#priority}

---

##### `sessionMatcher`<sup>Required</sup> <a name="sessionMatcher" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.sessionMatcher"></a>

```java
public java.lang.String getSessionMatcher();
```

- *Type:* java.lang.String

CEL expression for matching on session criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#session_matcher GoogleNetworkSecurityGatewaySecurityPolicyRule#session_matcher}

---

##### `applicationMatcher`<sup>Optional</sup> <a name="applicationMatcher" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.applicationMatcher"></a>

```java
public java.lang.String getApplicationMatcher();
```

- *Type:* java.lang.String

CEL expression for matching on L7/application level criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#application_matcher GoogleNetworkSecurityGatewaySecurityPolicyRule#application_matcher}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#deletion_policy GoogleNetworkSecurityGatewaySecurityPolicyRule#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#description GoogleNetworkSecurityGatewaySecurityPolicyRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#id GoogleNetworkSecurityGatewaySecurityPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#project GoogleNetworkSecurityGatewaySecurityPolicyRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.timeouts"></a>

```java
public GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#timeouts GoogleNetworkSecurityGatewaySecurityPolicyRule#timeouts}

---

##### `tlsInspectionEnabled`<sup>Optional</sup> <a name="tlsInspectionEnabled" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleConfig.property.tlsInspectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getTlsInspectionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Flag to enable TLS inspection of traffic matching on. Can only be true if the parent GatewaySecurityPolicy references a TLSInspectionConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#tls_inspection_enabled GoogleNetworkSecurityGatewaySecurityPolicyRule#tls_inspection_enabled}

---

### GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts <a name="GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_gateway_security_policy_rule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts;

GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#create GoogleNetworkSecurityGatewaySecurityPolicyRule#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#delete GoogleNetworkSecurityGatewaySecurityPolicyRule#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#update GoogleNetworkSecurityGatewaySecurityPolicyRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#create GoogleNetworkSecurityGatewaySecurityPolicyRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#delete GoogleNetworkSecurityGatewaySecurityPolicyRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_gateway_security_policy_rule#update GoogleNetworkSecurityGatewaySecurityPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference <a name="GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_gateway_security_policy_rule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference;

new GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityGatewaySecurityPolicyRule.GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts">GoogleNetworkSecurityGatewaySecurityPolicyRuleTimeouts</a>

---



