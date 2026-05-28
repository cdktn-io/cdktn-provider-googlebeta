# `googleApigeeKeystoresAliasesKeyCertFile` Submodule <a name="`googleApigeeKeystoresAliasesKeyCertFile` Submodule" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeKeystoresAliasesKeyCertFile <a name="GoogleApigeeKeystoresAliasesKeyCertFile" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_keystores_aliases_key_cert_file google_apigee_keystores_aliases_key_cert_file}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeKeystoresAliasesKeyCertFile(Construct Scope, string Id, GoogleApigeeKeystoresAliasesKeyCertFileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig">GoogleApigeeKeystoresAliasesKeyCertFileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig">GoogleApigeeKeystoresAliasesKeyCertFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleApigeeKeystoresAliasesKeyCertFileTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts">GoogleApigeeKeystoresAliasesKeyCertFileTimeouts</a>

---

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleApigeeKeystoresAliasesKeyCertFile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleApigeeKeystoresAliasesKeyCertFile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleApigeeKeystoresAliasesKeyCertFile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleApigeeKeystoresAliasesKeyCertFile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleApigeeKeystoresAliasesKeyCertFile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleApigeeKeystoresAliasesKeyCertFile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApigeeKeystoresAliasesKeyCertFile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApigeeKeystoresAliasesKeyCertFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleApigeeKeystoresAliasesKeyCertFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.certsInfo">CertsInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference">GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.certInput">CertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.keystoreInput">KeystoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.orgIdInput">OrgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts">GoogleApigeeKeystoresAliasesKeyCertFileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.cert">Cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.keystore">Keystore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.password">Password</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CertsInfo`<sup>Required</sup> <a name="CertsInfo" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.certsInfo"></a>

```csharp
public GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList CertsInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.timeouts"></a>

```csharp
public GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference">GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `CertInput`<sup>Optional</sup> <a name="CertInput" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.certInput"></a>

```csharp
public string CertInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `KeystoreInput`<sup>Optional</sup> <a name="KeystoreInput" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.keystoreInput"></a>

```csharp
public string KeystoreInput { get; }
```

- *Type:* string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.orgIdInput"></a>

```csharp
public string OrgIdInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleApigeeKeystoresAliasesKeyCertFileTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts">GoogleApigeeKeystoresAliasesKeyCertFileTimeouts</a>

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.cert"></a>

```csharp
public string Cert { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Keystore`<sup>Required</sup> <a name="Keystore" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.keystore"></a>

```csharp
public string Keystore { get; }
```

- *Type:* string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo <a name="GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo {

};
```


### GoogleApigeeKeystoresAliasesKeyCertFileConfig <a name="GoogleApigeeKeystoresAliasesKeyCertFileConfig" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeKeystoresAliasesKeyCertFileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Alias,
    string Cert,
    string Environment,
    string Keystore,
    string OrgId,
    string Key = null,
    string Password = null,
    GoogleApigeeKeystoresAliasesKeyCertFileTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.alias">Alias</a></code> | <code>string</code> | Alias Name. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.cert">Cert</a></code> | <code>string</code> | Cert content. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.environment">Environment</a></code> | <code>string</code> | Environment associated with the alias. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.keystore">Keystore</a></code> | <code>string</code> | Keystore Name. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.orgId">OrgId</a></code> | <code>string</code> | Organization ID associated with the alias. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.key">Key</a></code> | <code>string</code> | Private Key content, omit if uploading to truststore. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.password">Password</a></code> | <code>string</code> | Password for the Private Key if it's encrypted. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts">GoogleApigeeKeystoresAliasesKeyCertFileTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#alias GoogleApigeeKeystoresAliasesKeyCertFile#alias}

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.cert"></a>

```csharp
public string Cert { get; set; }
```

- *Type:* string

Cert content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#cert GoogleApigeeKeystoresAliasesKeyCertFile#cert}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

Environment associated with the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#environment GoogleApigeeKeystoresAliasesKeyCertFile#environment}

---

##### `Keystore`<sup>Required</sup> <a name="Keystore" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.keystore"></a>

```csharp
public string Keystore { get; set; }
```

- *Type:* string

Keystore Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#keystore GoogleApigeeKeystoresAliasesKeyCertFile#keystore}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.orgId"></a>

```csharp
public string OrgId { get; set; }
```

- *Type:* string

Organization ID associated with the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#org_id GoogleApigeeKeystoresAliasesKeyCertFile#org_id}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Private Key content, omit if uploading to truststore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#key GoogleApigeeKeystoresAliasesKeyCertFile#key}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for the Private Key if it's encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#password GoogleApigeeKeystoresAliasesKeyCertFile#password}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileConfig.property.timeouts"></a>

```csharp
public GoogleApigeeKeystoresAliasesKeyCertFileTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts">GoogleApigeeKeystoresAliasesKeyCertFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#timeouts GoogleApigeeKeystoresAliasesKeyCertFile#timeouts}

---

### GoogleApigeeKeystoresAliasesKeyCertFileTimeouts <a name="GoogleApigeeKeystoresAliasesKeyCertFileTimeouts" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeKeystoresAliasesKeyCertFileTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.property.read">Read</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#create GoogleApigeeKeystoresAliasesKeyCertFile#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#delete GoogleApigeeKeystoresAliasesKeyCertFile#delete}

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#read GoogleApigeeKeystoresAliasesKeyCertFile#read}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_apigee_keystores_aliases_key_cert_file#update GoogleApigeeKeystoresAliasesKeyCertFile#update}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList <a name="GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList.get"></a>

```csharp
private GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference <a name="GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.basicConstraints">BasicConstraints</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.expiryDate">ExpiryDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.isValid">IsValid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.sigAlgName">SigAlgName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.validFrom">ValidFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BasicConstraints`<sup>Required</sup> <a name="BasicConstraints" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.basicConstraints"></a>

```csharp
public string BasicConstraints { get; }
```

- *Type:* string

---

##### `ExpiryDate`<sup>Required</sup> <a name="ExpiryDate" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.expiryDate"></a>

```csharp
public string ExpiryDate { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `IsValid`<sup>Required</sup> <a name="IsValid" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.isValid"></a>

```csharp
public string IsValid { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `SigAlgName`<sup>Required</sup> <a name="SigAlgName" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.sigAlgName"></a>

```csharp
public string SigAlgName { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `SubjectAlternativeNames`<sup>Required</sup> <a name="SubjectAlternativeNames" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.subjectAlternativeNames"></a>

```csharp
public string[] SubjectAlternativeNames { get; }
```

- *Type:* string[]

---

##### `ValidFrom`<sup>Required</sup> <a name="ValidFrom" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.validFrom"></a>

```csharp
public string ValidFrom { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.internalValue"></a>

```csharp
public GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo">GoogleApigeeKeystoresAliasesKeyCertFileCertsInfo</a>

---


### GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference <a name="GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts">GoogleApigeeKeystoresAliasesKeyCertFileTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleApigeeKeystoresAliasesKeyCertFileTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApigeeKeystoresAliasesKeyCertFile.GoogleApigeeKeystoresAliasesKeyCertFileTimeouts">GoogleApigeeKeystoresAliasesKeyCertFileTimeouts</a>

---



