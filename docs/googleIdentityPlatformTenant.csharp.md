# `googleIdentityPlatformTenant` Submodule <a name="`googleIdentityPlatformTenant` Submodule" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIdentityPlatformTenant <a name="GoogleIdentityPlatformTenant" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_identity_platform_tenant google_identity_platform_tenant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIdentityPlatformTenant(Construct Scope, string Id, GoogleIdentityPlatformTenantConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig">GoogleIdentityPlatformTenantConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig">GoogleIdentityPlatformTenantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.putClient">PutClient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetAllowPasswordSignup">ResetAllowPasswordSignup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetClient">ResetClient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetDisableAuth">ResetDisableAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetEnableEmailLinkSignin">ResetEnableEmailLinkSignin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutClient` <a name="PutClient" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.putClient"></a>

```csharp
private void PutClient(GoogleIdentityPlatformTenantClient Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.putClient.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClient">GoogleIdentityPlatformTenantClient</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleIdentityPlatformTenantTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a>

---

##### `ResetAllowPasswordSignup` <a name="ResetAllowPasswordSignup" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetAllowPasswordSignup"></a>

```csharp
private void ResetAllowPasswordSignup()
```

##### `ResetClient` <a name="ResetClient" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetClient"></a>

```csharp
private void ResetClient()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisableAuth` <a name="ResetDisableAuth" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetDisableAuth"></a>

```csharp
private void ResetDisableAuth()
```

##### `ResetEnableEmailLinkSignin` <a name="ResetEnableEmailLinkSignin" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetEnableEmailLinkSignin"></a>

```csharp
private void ResetEnableEmailLinkSignin()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIdentityPlatformTenant resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleIdentityPlatformTenant.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleIdentityPlatformTenant.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleIdentityPlatformTenant.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleIdentityPlatformTenant.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleIdentityPlatformTenant resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIdentityPlatformTenant to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIdentityPlatformTenant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_identity_platform_tenant#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIdentityPlatformTenant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.client">Client</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference">GoogleIdentityPlatformTenantClientOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference">GoogleIdentityPlatformTenantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.allowPasswordSignupInput">AllowPasswordSignupInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.clientInput">ClientInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClient">GoogleIdentityPlatformTenantClient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.disableAuthInput">DisableAuthInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.enableEmailLinkSigninInput">EnableEmailLinkSigninInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.allowPasswordSignup">AllowPasswordSignup</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.disableAuth">DisableAuth</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.enableEmailLinkSignin">EnableEmailLinkSignin</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Client`<sup>Required</sup> <a name="Client" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.client"></a>

```csharp
public GoogleIdentityPlatformTenantClientOutputReference Client { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference">GoogleIdentityPlatformTenantClientOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.timeouts"></a>

```csharp
public GoogleIdentityPlatformTenantTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference">GoogleIdentityPlatformTenantTimeoutsOutputReference</a>

---

##### `AllowPasswordSignupInput`<sup>Optional</sup> <a name="AllowPasswordSignupInput" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.allowPasswordSignupInput"></a>

```csharp
public bool|IResolvable AllowPasswordSignupInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ClientInput`<sup>Optional</sup> <a name="ClientInput" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.clientInput"></a>

```csharp
public GoogleIdentityPlatformTenantClient ClientInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClient">GoogleIdentityPlatformTenantClient</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisableAuthInput`<sup>Optional</sup> <a name="DisableAuthInput" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.disableAuthInput"></a>

```csharp
public bool|IResolvable DisableAuthInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnableEmailLinkSigninInput`<sup>Optional</sup> <a name="EnableEmailLinkSigninInput" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.enableEmailLinkSigninInput"></a>

```csharp
public bool|IResolvable EnableEmailLinkSigninInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleIdentityPlatformTenantTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a>

---

##### `AllowPasswordSignup`<sup>Required</sup> <a name="AllowPasswordSignup" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.allowPasswordSignup"></a>

```csharp
public bool|IResolvable AllowPasswordSignup { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisableAuth`<sup>Required</sup> <a name="DisableAuth" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.disableAuth"></a>

```csharp
public bool|IResolvable DisableAuth { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnableEmailLinkSignin`<sup>Required</sup> <a name="EnableEmailLinkSignin" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.enableEmailLinkSignin"></a>

```csharp
public bool|IResolvable EnableEmailLinkSignin { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIdentityPlatformTenantClient <a name="GoogleIdentityPlatformTenantClient" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClient"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClient.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIdentityPlatformTenantClient {
    GoogleIdentityPlatformTenantClientPermissions Permissions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClient.property.permissions">Permissions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissions">GoogleIdentityPlatformTenantClientPermissions</a></code> | permissions block. |

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClient.property.permissions"></a>

```csharp
public GoogleIdentityPlatformTenantClientPermissions Permissions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissions">GoogleIdentityPlatformTenantClientPermissions</a>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_identity_platform_tenant#permissions GoogleIdentityPlatformTenant#permissions}

---

### GoogleIdentityPlatformTenantClientPermissions <a name="GoogleIdentityPlatformTenantClientPermissions" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIdentityPlatformTenantClientPermissions {
    bool|IResolvable DisabledUserDeletion = null,
    bool|IResolvable DisabledUserSignup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissions.property.disabledUserDeletion">DisabledUserDeletion</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When true, end users cannot delete their account on the associated project through any of our API methods. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissions.property.disabledUserSignup">DisabledUserSignup</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When true, end users cannot sign up for a new account on the associated project through any of our API methods. |

---

##### `DisabledUserDeletion`<sup>Optional</sup> <a name="DisabledUserDeletion" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissions.property.disabledUserDeletion"></a>

```csharp
public bool|IResolvable DisabledUserDeletion { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When true, end users cannot delete their account on the associated project through any of our API methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_identity_platform_tenant#disabled_user_deletion GoogleIdentityPlatformTenant#disabled_user_deletion}

---

##### `DisabledUserSignup`<sup>Optional</sup> <a name="DisabledUserSignup" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissions.property.disabledUserSignup"></a>

```csharp
public bool|IResolvable DisabledUserSignup { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When true, end users cannot sign up for a new account on the associated project through any of our API methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_identity_platform_tenant#disabled_user_signup GoogleIdentityPlatformTenant#disabled_user_signup}

---

### GoogleIdentityPlatformTenantConfig <a name="GoogleIdentityPlatformTenantConfig" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIdentityPlatformTenantConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    bool|IResolvable AllowPasswordSignup = null,
    GoogleIdentityPlatformTenantClient Client = null,
    string DeletionPolicy = null,
    bool|IResolvable DisableAuth = null,
    bool|IResolvable EnableEmailLinkSignin = null,
    string Id = null,
    string Project = null,
    GoogleIdentityPlatformTenantTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Human friendly display name of the tenant. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.allowPasswordSignup">AllowPasswordSignup</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to allow email/password user authentication. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.client">Client</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClient">GoogleIdentityPlatformTenantClient</a></code> | client block. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.disableAuth">DisableAuth</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether authentication is disabled for the tenant. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.enableEmailLinkSignin">EnableEmailLinkSignin</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to enable email link user authentication. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_identity_platform_tenant#id GoogleIdentityPlatformTenant#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_identity_platform_tenant#project GoogleIdentityPlatformTenant#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Human friendly display name of the tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_identity_platform_tenant#display_name GoogleIdentityPlatformTenant#display_name}

---

##### `AllowPasswordSignup`<sup>Optional</sup> <a name="AllowPasswordSignup" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.allowPasswordSignup"></a>

```csharp
public bool|IResolvable AllowPasswordSignup { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to allow email/password user authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_identity_platform_tenant#allow_password_signup GoogleIdentityPlatformTenant#allow_password_signup}

---

##### `Client`<sup>Optional</sup> <a name="Client" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.client"></a>

```csharp
public GoogleIdentityPlatformTenantClient Client { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClient">GoogleIdentityPlatformTenantClient</a>

client block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_identity_platform_tenant#client GoogleIdentityPlatformTenant#client}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_identity_platform_tenant#deletion_policy GoogleIdentityPlatformTenant#deletion_policy}

---

##### `DisableAuth`<sup>Optional</sup> <a name="DisableAuth" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.disableAuth"></a>

```csharp
public bool|IResolvable DisableAuth { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether authentication is disabled for the tenant.

If true, the users under
the disabled tenant are not allowed to sign-in. Admins of the disabled tenant
are not able to manage its users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_identity_platform_tenant#disable_auth GoogleIdentityPlatformTenant#disable_auth}

---

##### `EnableEmailLinkSignin`<sup>Optional</sup> <a name="EnableEmailLinkSignin" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.enableEmailLinkSignin"></a>

```csharp
public bool|IResolvable EnableEmailLinkSignin { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to enable email link user authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_identity_platform_tenant#enable_email_link_signin GoogleIdentityPlatformTenant#enable_email_link_signin}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_identity_platform_tenant#id GoogleIdentityPlatformTenant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_identity_platform_tenant#project GoogleIdentityPlatformTenant#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.timeouts"></a>

```csharp
public GoogleIdentityPlatformTenantTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_identity_platform_tenant#timeouts GoogleIdentityPlatformTenant#timeouts}

---

### GoogleIdentityPlatformTenantTimeouts <a name="GoogleIdentityPlatformTenantTimeouts" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIdentityPlatformTenantTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_identity_platform_tenant#create GoogleIdentityPlatformTenant#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_identity_platform_tenant#delete GoogleIdentityPlatformTenant#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_identity_platform_tenant#update GoogleIdentityPlatformTenant#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_identity_platform_tenant#create GoogleIdentityPlatformTenant#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_identity_platform_tenant#delete GoogleIdentityPlatformTenant#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_identity_platform_tenant#update GoogleIdentityPlatformTenant#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIdentityPlatformTenantClientOutputReference <a name="GoogleIdentityPlatformTenantClientOutputReference" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIdentityPlatformTenantClientOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.putPermissions">PutPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.resetPermissions">ResetPermissions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPermissions` <a name="PutPermissions" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.putPermissions"></a>

```csharp
private void PutPermissions(GoogleIdentityPlatformTenantClientPermissions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.putPermissions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissions">GoogleIdentityPlatformTenantClientPermissions</a>

---

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.resetPermissions"></a>

```csharp
private void ResetPermissions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.property.permissions">Permissions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference">GoogleIdentityPlatformTenantClientPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissions">GoogleIdentityPlatformTenantClientPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClient">GoogleIdentityPlatformTenantClient</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.property.permissions"></a>

```csharp
public GoogleIdentityPlatformTenantClientPermissionsOutputReference Permissions { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference">GoogleIdentityPlatformTenantClientPermissionsOutputReference</a>

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.property.permissionsInput"></a>

```csharp
public GoogleIdentityPlatformTenantClientPermissions PermissionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissions">GoogleIdentityPlatformTenantClientPermissions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientOutputReference.property.internalValue"></a>

```csharp
public GoogleIdentityPlatformTenantClient InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClient">GoogleIdentityPlatformTenantClient</a>

---


### GoogleIdentityPlatformTenantClientPermissionsOutputReference <a name="GoogleIdentityPlatformTenantClientPermissionsOutputReference" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIdentityPlatformTenantClientPermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.resetDisabledUserDeletion">ResetDisabledUserDeletion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.resetDisabledUserSignup">ResetDisabledUserSignup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabledUserDeletion` <a name="ResetDisabledUserDeletion" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.resetDisabledUserDeletion"></a>

```csharp
private void ResetDisabledUserDeletion()
```

##### `ResetDisabledUserSignup` <a name="ResetDisabledUserSignup" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.resetDisabledUserSignup"></a>

```csharp
private void ResetDisabledUserSignup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.property.disabledUserDeletionInput">DisabledUserDeletionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.property.disabledUserSignupInput">DisabledUserSignupInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.property.disabledUserDeletion">DisabledUserDeletion</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.property.disabledUserSignup">DisabledUserSignup</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissions">GoogleIdentityPlatformTenantClientPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisabledUserDeletionInput`<sup>Optional</sup> <a name="DisabledUserDeletionInput" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.property.disabledUserDeletionInput"></a>

```csharp
public bool|IResolvable DisabledUserDeletionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisabledUserSignupInput`<sup>Optional</sup> <a name="DisabledUserSignupInput" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.property.disabledUserSignupInput"></a>

```csharp
public bool|IResolvable DisabledUserSignupInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisabledUserDeletion`<sup>Required</sup> <a name="DisabledUserDeletion" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.property.disabledUserDeletion"></a>

```csharp
public bool|IResolvable DisabledUserDeletion { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisabledUserSignup`<sup>Required</sup> <a name="DisabledUserSignup" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.property.disabledUserSignup"></a>

```csharp
public bool|IResolvable DisabledUserSignup { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissionsOutputReference.property.internalValue"></a>

```csharp
public GoogleIdentityPlatformTenantClientPermissions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantClientPermissions">GoogleIdentityPlatformTenantClientPermissions</a>

---


### GoogleIdentityPlatformTenantTimeoutsOutputReference <a name="GoogleIdentityPlatformTenantTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIdentityPlatformTenantTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleIdentityPlatformTenantTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a>

---



