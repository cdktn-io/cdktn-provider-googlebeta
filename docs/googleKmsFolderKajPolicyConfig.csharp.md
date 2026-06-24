# `googleKmsFolderKajPolicyConfig` Submodule <a name="`googleKmsFolderKajPolicyConfig` Submodule" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsFolderKajPolicyConfig <a name="GoogleKmsFolderKajPolicyConfig" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_folder_kaj_policy_config google_kms_folder_kaj_policy_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleKmsFolderKajPolicyConfig(Construct Scope, string Id, GoogleKmsFolderKajPolicyConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig">GoogleKmsFolderKajPolicyConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig">GoogleKmsFolderKajPolicyConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.putDefaultKeyAccessJustificationPolicy">PutDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetDefaultKeyAccessJustificationPolicy">ResetDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefaultKeyAccessJustificationPolicy` <a name="PutDefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.putDefaultKeyAccessJustificationPolicy"></a>

```csharp
private void PutDefaultKeyAccessJustificationPolicy(GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.putDefaultKeyAccessJustificationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleKmsFolderKajPolicyConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts">GoogleKmsFolderKajPolicyConfigTimeouts</a>

---

##### `ResetDefaultKeyAccessJustificationPolicy` <a name="ResetDefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetDefaultKeyAccessJustificationPolicy"></a>

```csharp
private void ResetDefaultKeyAccessJustificationPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleKmsFolderKajPolicyConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleKmsFolderKajPolicyConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleKmsFolderKajPolicyConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleKmsFolderKajPolicyConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleKmsFolderKajPolicyConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleKmsFolderKajPolicyConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleKmsFolderKajPolicyConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleKmsFolderKajPolicyConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_folder_kaj_policy_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleKmsFolderKajPolicyConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.defaultKeyAccessJustificationPolicy">DefaultKeyAccessJustificationPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference">GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.defaultKeyAccessJustificationPolicyInput">DefaultKeyAccessJustificationPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts">GoogleKmsFolderKajPolicyConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DefaultKeyAccessJustificationPolicy`<sup>Required</sup> <a name="DefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.defaultKeyAccessJustificationPolicy"></a>

```csharp
public GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference DefaultKeyAccessJustificationPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.timeouts"></a>

```csharp
public GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference">GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference</a>

---

##### `DefaultKeyAccessJustificationPolicyInput`<sup>Optional</sup> <a name="DefaultKeyAccessJustificationPolicyInput" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.defaultKeyAccessJustificationPolicyInput"></a>

```csharp
public GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy DefaultKeyAccessJustificationPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleKmsFolderKajPolicyConfigTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts">GoogleKmsFolderKajPolicyConfigTimeouts</a>

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsFolderKajPolicyConfigConfig <a name="GoogleKmsFolderKajPolicyConfigConfig" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleKmsFolderKajPolicyConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Folder,
    GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy DefaultKeyAccessJustificationPolicy = null,
    string Id = null,
    GoogleKmsFolderKajPolicyConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.folder">Folder</a></code> | <code>string</code> | The numeric folder number for which to retrieve config. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.defaultKeyAccessJustificationPolicy">DefaultKeyAccessJustificationPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | default_key_access_justification_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_folder_kaj_policy_config#id GoogleKmsFolderKajPolicyConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts">GoogleKmsFolderKajPolicyConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

The numeric folder number for which to retrieve config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_folder_kaj_policy_config#folder GoogleKmsFolderKajPolicyConfig#folder}

---

##### `DefaultKeyAccessJustificationPolicy`<sup>Optional</sup> <a name="DefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.defaultKeyAccessJustificationPolicy"></a>

```csharp
public GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy DefaultKeyAccessJustificationPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

default_key_access_justification_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_folder_kaj_policy_config#default_key_access_justification_policy GoogleKmsFolderKajPolicyConfig#default_key_access_justification_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_folder_kaj_policy_config#id GoogleKmsFolderKajPolicyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigConfig.property.timeouts"></a>

```csharp
public GoogleKmsFolderKajPolicyConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts">GoogleKmsFolderKajPolicyConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_folder_kaj_policy_config#timeouts GoogleKmsFolderKajPolicyConfig#timeouts}

---

### GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy <a name="GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy {
    string[] AllowedAccessReasons = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy.property.allowedAccessReasons">AllowedAccessReasons</a></code> | <code>string[]</code> | A KeyAccessJustificationsPolicy specifies zero or more allowed AccessReason values for encrypt, decrypt, and sign operations on a CryptoKey. |

---

##### `AllowedAccessReasons`<sup>Optional</sup> <a name="AllowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy.property.allowedAccessReasons"></a>

```csharp
public string[] AllowedAccessReasons { get; set; }
```

- *Type:* string[]

A KeyAccessJustificationsPolicy specifies zero or more allowed AccessReason values for encrypt, decrypt, and sign operations on a CryptoKey.

Possible values: ["CUSTOMER_INITIATED_SUPPORT", "GOOGLE_INITIATED_SERVICE", "THIRD_PARTY_DATA_REQUEST", "GOOGLE_INITIATED_REVIEW", "CUSTOMER_INITIATED_ACCESS", "GOOGLE_INITIATED_SYSTEM_OPERATION", "REASON_NOT_EXPECTED", "MODIFIED_CUSTOMER_INITIATED_ACCESS", "MODIFIED_GOOGLE_INITIATED_SYSTEM_OPERATION", "GOOGLE_RESPONSE_TO_PRODUCTION_ALERT", "CUSTOMER_AUTHORIZED_WORKFLOW_SERVICING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_folder_kaj_policy_config#allowed_access_reasons GoogleKmsFolderKajPolicyConfig#allowed_access_reasons}

---

### GoogleKmsFolderKajPolicyConfigTimeouts <a name="GoogleKmsFolderKajPolicyConfigTimeouts" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleKmsFolderKajPolicyConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_folder_kaj_policy_config#create GoogleKmsFolderKajPolicyConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_folder_kaj_policy_config#delete GoogleKmsFolderKajPolicyConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_folder_kaj_policy_config#update GoogleKmsFolderKajPolicyConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_folder_kaj_policy_config#create GoogleKmsFolderKajPolicyConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_folder_kaj_policy_config#delete GoogleKmsFolderKajPolicyConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_kms_folder_kaj_policy_config#update GoogleKmsFolderKajPolicyConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference <a name="GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resetAllowedAccessReasons">ResetAllowedAccessReasons</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedAccessReasons` <a name="ResetAllowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resetAllowedAccessReasons"></a>

```csharp
private void ResetAllowedAccessReasons()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasonsInput">AllowedAccessReasonsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasons">AllowedAccessReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedAccessReasonsInput`<sup>Optional</sup> <a name="AllowedAccessReasonsInput" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasonsInput"></a>

```csharp
public string[] AllowedAccessReasonsInput { get; }
```

- *Type:* string[]

---

##### `AllowedAccessReasons`<sup>Required</sup> <a name="AllowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasons"></a>

```csharp
public string[] AllowedAccessReasons { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsFolderKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---


### GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference <a name="GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts">GoogleKmsFolderKajPolicyConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleKmsFolderKajPolicyConfigTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleKmsFolderKajPolicyConfig.GoogleKmsFolderKajPolicyConfigTimeouts">GoogleKmsFolderKajPolicyConfigTimeouts</a>

---



