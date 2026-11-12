# `googleDiscoveryEngineProjectProvision` Submodule <a name="`googleDiscoveryEngineProjectProvision` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineProjectProvision <a name="GoogleDiscoveryEngineProjectProvision" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision google_discovery_engine_project_provision}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineProjectProvision(Construct Scope, string Id, GoogleDiscoveryEngineProjectProvisionConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig">GoogleDiscoveryEngineProjectProvisionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig">GoogleDiscoveryEngineProjectProvisionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.putSaasParams">PutSaasParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetAcceptDataUseTerms">ResetAcceptDataUseTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetDataUseTermsVersion">ResetDataUseTermsVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetSaasParams">ResetSaasParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSaasParams` <a name="PutSaasParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.putSaasParams"></a>

```csharp
private void PutSaasParams(GoogleDiscoveryEngineProjectProvisionSaasParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.putSaasParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDiscoveryEngineProjectProvisionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a>

---

##### `ResetAcceptDataUseTerms` <a name="ResetAcceptDataUseTerms" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetAcceptDataUseTerms"></a>

```csharp
private void ResetAcceptDataUseTerms()
```

##### `ResetDataUseTermsVersion` <a name="ResetDataUseTermsVersion" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetDataUseTermsVersion"></a>

```csharp
private void ResetDataUseTermsVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSaasParams` <a name="ResetSaasParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetSaasParams"></a>

```csharp
private void ResetSaasParams()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineProjectProvision resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDiscoveryEngineProjectProvision.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDiscoveryEngineProjectProvision.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDiscoveryEngineProjectProvision.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDiscoveryEngineProjectProvision.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleDiscoveryEngineProjectProvision resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDiscoveryEngineProjectProvision to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDiscoveryEngineProjectProvision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineProjectProvision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.saasParams">SaasParams</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference">GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference">GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.acceptDataUseTermsInput">AcceptDataUseTermsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.dataUseTermsVersionInput">DataUseTermsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.saasParamsInput">SaasParamsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.acceptDataUseTerms">AcceptDataUseTerms</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.dataUseTermsVersion">DataUseTermsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SaasParams`<sup>Required</sup> <a name="SaasParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.saasParams"></a>

```csharp
public GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference SaasParams { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference">GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.timeouts"></a>

```csharp
public GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference">GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference</a>

---

##### `AcceptDataUseTermsInput`<sup>Optional</sup> <a name="AcceptDataUseTermsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.acceptDataUseTermsInput"></a>

```csharp
public bool|IResolvable AcceptDataUseTermsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DataUseTermsVersionInput`<sup>Optional</sup> <a name="DataUseTermsVersionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.dataUseTermsVersionInput"></a>

```csharp
public string DataUseTermsVersionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SaasParamsInput`<sup>Optional</sup> <a name="SaasParamsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.saasParamsInput"></a>

```csharp
public GoogleDiscoveryEngineProjectProvisionSaasParams SaasParamsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineProjectProvisionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a>

---

##### `AcceptDataUseTerms`<sup>Required</sup> <a name="AcceptDataUseTerms" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.acceptDataUseTerms"></a>

```csharp
public bool|IResolvable AcceptDataUseTerms { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DataUseTermsVersion`<sup>Required</sup> <a name="DataUseTermsVersion" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.dataUseTermsVersion"></a>

```csharp
public string DataUseTermsVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineProjectProvisionConfig <a name="GoogleDiscoveryEngineProjectProvisionConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineProjectProvisionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable AcceptDataUseTerms = null,
    string DataUseTermsVersion = null,
    string Id = null,
    string Location = null,
    string Project = null,
    GoogleDiscoveryEngineProjectProvisionSaasParams SaasParams = null,
    GoogleDiscoveryEngineProjectProvisionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.acceptDataUseTerms">AcceptDataUseTerms</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set to 'true' to specify that the caller has read and consents to the [Terms for data use](https://cloud.google.com/retail/data-use-terms). |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.dataUseTermsVersion">DataUseTermsVersion</a></code> | <code>string</code> | The version of the [Terms for data use](https://cloud.google.com/retail/data-use-terms) that the caller has read and consents to. An acceptable version is '2022-11-23', and this may change over time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#id GoogleDiscoveryEngineProjectProvision#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.location">Location</a></code> | <code>string</code> | The geographic location in which to provision the project, such as 'global', 'us', or 'eu'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#project GoogleDiscoveryEngineProjectProvision#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.saasParams">SaasParams</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a></code> | saas_params block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AcceptDataUseTerms`<sup>Optional</sup> <a name="AcceptDataUseTerms" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.acceptDataUseTerms"></a>

```csharp
public bool|IResolvable AcceptDataUseTerms { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set to 'true' to specify that the caller has read and consents to the [Terms for data use](https://cloud.google.com/retail/data-use-terms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#accept_data_use_terms GoogleDiscoveryEngineProjectProvision#accept_data_use_terms}

---

##### `DataUseTermsVersion`<sup>Optional</sup> <a name="DataUseTermsVersion" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.dataUseTermsVersion"></a>

```csharp
public string DataUseTermsVersion { get; set; }
```

- *Type:* string

The version of the [Terms for data use](https://cloud.google.com/retail/data-use-terms) that the caller has read and consents to. An acceptable version is '2022-11-23', and this may change over time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#data_use_terms_version GoogleDiscoveryEngineProjectProvision#data_use_terms_version}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#id GoogleDiscoveryEngineProjectProvision#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The geographic location in which to provision the project, such as 'global', 'us', or 'eu'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#location GoogleDiscoveryEngineProjectProvision#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#project GoogleDiscoveryEngineProjectProvision#project}.

---

##### `SaasParams`<sup>Optional</sup> <a name="SaasParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.saasParams"></a>

```csharp
public GoogleDiscoveryEngineProjectProvisionSaasParams SaasParams { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a>

saas_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#saas_params GoogleDiscoveryEngineProjectProvision#saas_params}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.timeouts"></a>

```csharp
public GoogleDiscoveryEngineProjectProvisionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#timeouts GoogleDiscoveryEngineProjectProvision#timeouts}

---

### GoogleDiscoveryEngineProjectProvisionSaasParams <a name="GoogleDiscoveryEngineProjectProvisionSaasParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineProjectProvisionSaasParams {
    bool|IResolvable AcceptBizQos = null,
    bool|IResolvable IsBiz = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams.property.acceptBizQos">AcceptBizQos</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set to 'true' to specify that the caller has read and consents to the Terms for business edition quality of service. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams.property.isBiz">IsBiz</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the current request is for Business edition ('true') or not ('false'). |

---

##### `AcceptBizQos`<sup>Optional</sup> <a name="AcceptBizQos" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams.property.acceptBizQos"></a>

```csharp
public bool|IResolvable AcceptBizQos { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set to 'true' to specify that the caller has read and consents to the Terms for business edition quality of service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#accept_biz_qos GoogleDiscoveryEngineProjectProvision#accept_biz_qos}

---

##### `IsBiz`<sup>Optional</sup> <a name="IsBiz" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams.property.isBiz"></a>

```csharp
public bool|IResolvable IsBiz { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the current request is for Business edition ('true') or not ('false').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#is_biz GoogleDiscoveryEngineProjectProvision#is_biz}

---

### GoogleDiscoveryEngineProjectProvisionTimeouts <a name="GoogleDiscoveryEngineProjectProvisionTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineProjectProvisionTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#create GoogleDiscoveryEngineProjectProvision#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#delete GoogleDiscoveryEngineProjectProvision#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#create GoogleDiscoveryEngineProjectProvision#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#delete GoogleDiscoveryEngineProjectProvision#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference <a name="GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resetAcceptBizQos">ResetAcceptBizQos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resetIsBiz">ResetIsBiz</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcceptBizQos` <a name="ResetAcceptBizQos" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resetAcceptBizQos"></a>

```csharp
private void ResetAcceptBizQos()
```

##### `ResetIsBiz` <a name="ResetIsBiz" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resetIsBiz"></a>

```csharp
private void ResetIsBiz()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQosInput">AcceptBizQosInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBizInput">IsBizInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQos">AcceptBizQos</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBiz">IsBiz</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceptBizQosInput`<sup>Optional</sup> <a name="AcceptBizQosInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQosInput"></a>

```csharp
public bool|IResolvable AcceptBizQosInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsBizInput`<sup>Optional</sup> <a name="IsBizInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBizInput"></a>

```csharp
public bool|IResolvable IsBizInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AcceptBizQos`<sup>Required</sup> <a name="AcceptBizQos" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQos"></a>

```csharp
public bool|IResolvable AcceptBizQos { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsBiz`<sup>Required</sup> <a name="IsBiz" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBiz"></a>

```csharp
public bool|IResolvable IsBiz { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.internalValue"></a>

```csharp
public GoogleDiscoveryEngineProjectProvisionSaasParams InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a>

---


### GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference <a name="GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineProjectProvisionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a>

---



