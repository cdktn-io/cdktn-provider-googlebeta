# `googleNetworkSecuritySacRealm` Submodule <a name="`googleNetworkSecuritySacRealm` Submodule" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecuritySacRealm <a name="GoogleNetworkSecuritySacRealm" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_sac_realm google_network_security_sac_realm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkSecuritySacRealm(Construct Scope, string Id, GoogleNetworkSecuritySacRealmConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig">GoogleNetworkSecuritySacRealmConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig">GoogleNetworkSecuritySacRealmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.putSymantecOptions">PutSymantecOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.resetSymantecOptions">ResetSymantecOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSymantecOptions` <a name="PutSymantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.putSymantecOptions"></a>

```csharp
private void PutSymantecOptions(GoogleNetworkSecuritySacRealmSymantecOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.putSymantecOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptions">GoogleNetworkSecuritySacRealmSymantecOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkSecuritySacRealmTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeouts">GoogleNetworkSecuritySacRealmTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSymantecOptions` <a name="ResetSymantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.resetSymantecOptions"></a>

```csharp
private void ResetSymantecOptions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkSecuritySacRealm resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkSecuritySacRealm.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkSecuritySacRealm.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkSecuritySacRealm.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkSecuritySacRealm.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleNetworkSecuritySacRealm resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkSecuritySacRealm to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkSecuritySacRealm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_sac_realm#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecuritySacRealm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.pairingKey">PairingKey</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList">GoogleNetworkSecuritySacRealmPairingKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.symantecOptions">SymantecOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference">GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference">GoogleNetworkSecuritySacRealmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.securityServiceInput">SecurityServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.symantecOptionsInput">SymantecOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptions">GoogleNetworkSecuritySacRealmSymantecOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeouts">GoogleNetworkSecuritySacRealmTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.securityService">SecurityService</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `PairingKey`<sup>Required</sup> <a name="PairingKey" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.pairingKey"></a>

```csharp
public GoogleNetworkSecuritySacRealmPairingKeyList PairingKey { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList">GoogleNetworkSecuritySacRealmPairingKeyList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SymantecOptions`<sup>Required</sup> <a name="SymantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.symantecOptions"></a>

```csharp
public GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference SymantecOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference">GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.timeouts"></a>

```csharp
public GoogleNetworkSecuritySacRealmTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference">GoogleNetworkSecuritySacRealmTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SecurityServiceInput`<sup>Optional</sup> <a name="SecurityServiceInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.securityServiceInput"></a>

```csharp
public string SecurityServiceInput { get; }
```

- *Type:* string

---

##### `SymantecOptionsInput`<sup>Optional</sup> <a name="SymantecOptionsInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.symantecOptionsInput"></a>

```csharp
public GoogleNetworkSecuritySacRealmSymantecOptions SymantecOptionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptions">GoogleNetworkSecuritySacRealmSymantecOptions</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleNetworkSecuritySacRealmTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeouts">GoogleNetworkSecuritySacRealmTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SecurityService`<sup>Required</sup> <a name="SecurityService" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.securityService"></a>

```csharp
public string SecurityService { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealm.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecuritySacRealmConfig <a name="GoogleNetworkSecuritySacRealmConfig" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkSecuritySacRealmConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string SecurityService,
    string DeletionPolicy = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleNetworkSecuritySacRealmSymantecOptions SymantecOptions = null,
    GoogleNetworkSecuritySacRealmTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.name">Name</a></code> | <code>string</code> | Identifier. Resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.securityService">SecurityService</a></code> | <code>string</code> | SSE service provider associated with the realm. Possible values: ["SECURITY_SERVICE_UNSPECIFIED", "PALO_ALTO_PRISMA_ACCESS", "SYMANTEC_CLOUD_SWG"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_sac_realm#id GoogleNetworkSecuritySacRealm#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_sac_realm#project GoogleNetworkSecuritySacRealm#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.symantecOptions">SymantecOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptions">GoogleNetworkSecuritySacRealmSymantecOptions</a></code> | symantec_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeouts">GoogleNetworkSecuritySacRealmTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Identifier. Resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_sac_realm#name GoogleNetworkSecuritySacRealm#name}

---

##### `SecurityService`<sup>Required</sup> <a name="SecurityService" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.securityService"></a>

```csharp
public string SecurityService { get; set; }
```

- *Type:* string

SSE service provider associated with the realm. Possible values: ["SECURITY_SERVICE_UNSPECIFIED", "PALO_ALTO_PRISMA_ACCESS", "SYMANTEC_CLOUD_SWG"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_sac_realm#security_service GoogleNetworkSecuritySacRealm#security_service}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_sac_realm#deletion_policy GoogleNetworkSecuritySacRealm#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_sac_realm#id GoogleNetworkSecuritySacRealm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_sac_realm#labels GoogleNetworkSecuritySacRealm#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_sac_realm#project GoogleNetworkSecuritySacRealm#project}.

---

##### `SymantecOptions`<sup>Optional</sup> <a name="SymantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.symantecOptions"></a>

```csharp
public GoogleNetworkSecuritySacRealmSymantecOptions SymantecOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptions">GoogleNetworkSecuritySacRealmSymantecOptions</a>

symantec_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_sac_realm#symantec_options GoogleNetworkSecuritySacRealm#symantec_options}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmConfig.property.timeouts"></a>

```csharp
public GoogleNetworkSecuritySacRealmTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeouts">GoogleNetworkSecuritySacRealmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_sac_realm#timeouts GoogleNetworkSecuritySacRealm#timeouts}

---

### GoogleNetworkSecuritySacRealmPairingKey <a name="GoogleNetworkSecuritySacRealmPairingKey" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkSecuritySacRealmPairingKey {

};
```


### GoogleNetworkSecuritySacRealmSymantecOptions <a name="GoogleNetworkSecuritySacRealmSymantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkSecuritySacRealmSymantecOptions {
    string SecretPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptions.property.secretPath">SecretPath</a></code> | <code>string</code> | API Key used to call Symantec APIs on the user's behalf. |

---

##### `SecretPath`<sup>Optional</sup> <a name="SecretPath" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptions.property.secretPath"></a>

```csharp
public string SecretPath { get; set; }
```

- *Type:* string

API Key used to call Symantec APIs on the user's behalf.

Required if using Symantec Cloud SWG. P4SA account needs permissions granted to read this secret.
A secret ID, secret name, or secret URI can be specified, but it will be parsed and stored as a secret URI in the form projects/{projectNumber}/secrets/my-secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_sac_realm#secret_path GoogleNetworkSecuritySacRealm#secret_path}

---

### GoogleNetworkSecuritySacRealmTimeouts <a name="GoogleNetworkSecuritySacRealmTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkSecuritySacRealmTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_sac_realm#create GoogleNetworkSecuritySacRealm#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_sac_realm#delete GoogleNetworkSecuritySacRealm#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_sac_realm#update GoogleNetworkSecuritySacRealm#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_sac_realm#create GoogleNetworkSecuritySacRealm#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_sac_realm#delete GoogleNetworkSecuritySacRealm#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_security_sac_realm#update GoogleNetworkSecuritySacRealm#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecuritySacRealmPairingKeyList <a name="GoogleNetworkSecuritySacRealmPairingKeyList" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkSecuritySacRealmPairingKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList.get"></a>

```csharp
private GoogleNetworkSecuritySacRealmPairingKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleNetworkSecuritySacRealmPairingKeyOutputReference <a name="GoogleNetworkSecuritySacRealmPairingKeyOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkSecuritySacRealmPairingKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.property.expireTime">ExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKey">GoogleNetworkSecuritySacRealmPairingKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.property.expireTime"></a>

```csharp
public string ExpireTime { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKeyOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkSecuritySacRealmPairingKey InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmPairingKey">GoogleNetworkSecuritySacRealmPairingKey</a>

---


### GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference <a name="GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.resetSecretPath">ResetSecretPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretPath` <a name="ResetSecretPath" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.resetSecretPath"></a>

```csharp
private void ResetSecretPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.property.availableSymantecSites">AvailableSymantecSites</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.property.symantecConnectionState">SymantecConnectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.property.secretPathInput">SecretPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.property.secretPath">SecretPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptions">GoogleNetworkSecuritySacRealmSymantecOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailableSymantecSites`<sup>Required</sup> <a name="AvailableSymantecSites" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.property.availableSymantecSites"></a>

```csharp
public string[] AvailableSymantecSites { get; }
```

- *Type:* string[]

---

##### `SymantecConnectionState`<sup>Required</sup> <a name="SymantecConnectionState" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.property.symantecConnectionState"></a>

```csharp
public string SymantecConnectionState { get; }
```

- *Type:* string

---

##### `SecretPathInput`<sup>Optional</sup> <a name="SecretPathInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.property.secretPathInput"></a>

```csharp
public string SecretPathInput { get; }
```

- *Type:* string

---

##### `SecretPath`<sup>Required</sup> <a name="SecretPath" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.property.secretPath"></a>

```csharp
public string SecretPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkSecuritySacRealmSymantecOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmSymantecOptions">GoogleNetworkSecuritySacRealmSymantecOptions</a>

---


### GoogleNetworkSecuritySacRealmTimeoutsOutputReference <a name="GoogleNetworkSecuritySacRealmTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkSecuritySacRealmTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeouts">GoogleNetworkSecuritySacRealmTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkSecuritySacRealmTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacRealm.GoogleNetworkSecuritySacRealmTimeouts">GoogleNetworkSecuritySacRealmTimeouts</a>

---



